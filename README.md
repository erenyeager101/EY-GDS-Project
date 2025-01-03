
# **Spotify Clone**

A **Sign In** and **Sign Up** webpage for a **Spotify Clone**, progressively enhanced with backend integration, React frontend, and Spotify API features, such as genre, song, and artist fetching. 

---

## **Table of Contents**
1. [Project Description](#project-description)  
2. [Features](#features)  
3. [Technologies Used](#technologies-used)  
4. [Setup Instructions](#setup-instructions)  
5. [Future Enhancements](#future-enhancements)  

---

## **Project Description**
This project is a user authentication webpage designed for a Spotify clone, further developed into a fully functional music platform. Key components include:  
- A **Sign In** page where registered users can log in.  
- A **Sign Up** page where new users can register.  
- Backend integration with Spotify and Shazam Core APIs to fetch genres, songs, and artist details.  
- A React-based dashboard providing a seamless user experience.  
- Enhanced functionalities like a music player, country-based song exploration, and artist details.

The design emulates Spotify's aesthetic with a clean, modern, and interactive interface.

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

### **Week 3 Features:**
- **Advanced Functionalities:**
  - **Music Player**: Includes controls like play/pause, previous/next song, volume, repeat, and duration management. Displays song details.
  - **Homepage**: Users can explore top songs by genre.
  - **Explore Section**: Users can select a country and view top songs.
  - **Artist Details**: Displays additional information about artists and their popular songs.
  - **Song Details**: Shows the music video, lyrics, and similar songs.
- **Bonus Features:**
  - **Search Functionality**: Enables users to search for songs and artists.
  - **Exceptional UI/UX**: Consistent design elements, branding, and user-friendly interactions.

---

## **Technologies Used**
- **HTML5**: For structuring the webpages.  
- **CSS3**: For styling and responsive layout.  
- **JavaScript**: For interactive form validation and user experience.  
- **React.js (Next.js)**: For building the dashboard interface.  
- **Node.js and Express.js**: For backend integration with the Spotify and Shazam Core APIs.  
- **Spotify API**: For fetching genres, songs, and artists.  
- **Shazam Core API**: For gathering additional music data.  
- **IP Geolocation API**: For determining the user's location.  
- **Redux Toolkit**: For organized API calls.  
- **UI Libraries**: Material UI/TailwindCSS for styling.

---

## **Setup Instructions**
### **Week 1 Setup:**
1. Clone this repository to your local machine:  
   ```bash
   git clone https://github.com/yourusername/SpotifyClone.git
   ```  
2. Navigate to the project directory:  
   ```bash
   cd SpotifyClone
   ```  
3. Open `index.html` in your browser to view the webpage.  

### **Week 2 & 3 Setup:**
1. Follow the Week 1 setup to clone the repository.  
2. Navigate to the backend directory:  
   ```bash
   cd backend
   ```  
3. Install backend dependencies:  
   ```bash
   npm install
   ```  
4. Create a `.env` file with your API credentials:  
   ```env
   CLIENT_ID=your_spotify_client_id
   CLIENT_SECRET=your_spotify_client_secret
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
- Develop a robust recommendation system using machine learning.  

---

## **Bonus Points**
- Exceptional design with consistent branding and UI elements.  
- Clean code adhering to quality standards and best practices.  
