# **EY-GDS-Project-Week1 and Week2**
A **Sign In** and **Sign Up** webpage for a **Spotify Clone**, enhanced in Week 2 with backend integration, React frontend, and Spotify API features, such as genre, song, and artist fetching.

---

## **Table of Contents**
1. [Project Description](#project-description)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup Instructions](#setup-instructions)  
6. [Future Enhancements](#future-enhancements)  


---

## **Project Description**
This project is a user authentication webpage designed for a Spotify clone, enhanced with a dashboard in Week 2. Key components include:  
- A **Sign In** page where registered users can log in.  
- A **Sign Up** page where new users can register.  
- Backend integration with the Spotify API to fetch genres, songs, and artist details.  
- A React-based dashboard for a seamless user experience.  

The design mimics Spotify's aesthetic with a clean and modern interface.

---

## **Features**
### **Week 1 Features:**
- **Responsive Design**: Adjusts to various screen sizes for better user experience.  
- **Form Validation**: Ensures valid user input (e.g., email format, password length).  
- **Interactive Elements**: Provides user feedback with JavaScript-based validation.  

### **Week 2 Enhancements:**
- **Backend Integration**: Connected to the Spotify API for real-time data.  
- **React Frontend**: Created a dashboard for:
  - **Genre fetching**: Display a list of available genres.
  - **Song fetching**: Fetch and display songs based on user preferences.
  - **Artist fetching**: Show details about artists.
- **Dynamic Dashboard**: Interacts with the Spotify API to provide up-to-date information.

---

## **Technologies Used**
- **HTML5**: For structuring the webpages.  
- **CSS3**: For styling and responsive layout.  
- **JavaScript**: For interactive form validation and user experience.  
- **React.js**: For building the dashboard interface.  
- **Node.js and Express.js**: For backend integration with the Spotify API.  
- **Spotify API**: For fetching genres, songs, and artists.

---

## **Setup Instructions**
### **Week 1 Setup:**
1. Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/yourusername/EY-GDS-Project-Week1.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd EY-GDS-Project-Week1
   ```  
3. Open `index.html` in your browser to view the webpage.  

### **Week 2 Setup:**
1. Follow the Week 1 setup to clone the repository.  
2. Navigate to the backend directory:  
   ```bash
   cd backend
   ```  
3. Install backend dependencies:  
   ```bash
   npm install
   ```  
4. Create a `.env` file with your Spotify API credentials:  
   ```env
   CLIENT_ID=your_client_id
   CLIENT_SECRET=your_client_secret
   REDIRECT_URI=your_redirect_uri
   ```
5. Start the backend server:  
   ```bash
   npm start
   ```
6. Navigate to the frontend directory:  
   ```bash
   cd frontend
   ```  
7. Install frontend dependencies:  
   ```bash
   npm install
   ```  
8. Start the React development server:  
   ```bash
   npm start
   ```
9. Open the application in your browser at `http://localhost:3000`.

---


## **Future Enhancements**
- Implement user playlists with real-time updates.  
- Add user profile management.  
- Include advanced search and filter functionalities.  
- Integrate OAuth2 for social login (e.g., Google, Facebook).  
- Improve UI/UX for better user interaction.

---
