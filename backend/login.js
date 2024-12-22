const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const { MongoClient } = require('mongodb');
const bcrypt = require('bcrypt');
const helmet = require('helmet');

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let collection;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB for Auth');
}).catch(err => {
    console.error('MongoDB connection failed:', err);
});

const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('MongoDB connected successfully');
        const db = client.db('home');
        collection = db.collection('blogs');
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1);
    }
}

app.use(express.static(path.join(__dirname, 'frontend')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index2.html'));
});

app.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    const saltRounds = 10;

    try {
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        const newUser = new User({ email, password: hashedPassword });
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        res.status(500).send('Error registering user');
    }
});

app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (isPasswordValid) {
            res.redirect('/home');
        } else {
            res.status(401).send('Invalid password');
        }
    } catch (error) {
        res.status(500).send('Error logging in');
    }
});

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}).catch(err => {
    console.error('Failed to start server:', err);
});
