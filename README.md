# Spotify Clone - React Version

**Project Name:** Spotify Clone – React Version  
**Repo:** [USERNAME/spotifyCloneHtmlCss](https://github.com/USERNAME/spotifyCloneHtmlCss)  
*(Replace with your actual GitHub repository link)*

## Description  
This is a modern React clone of the Spotify interface, converted from the original HTML/CSS version.  
The project demonstrates:  
- **Modular React Components** with clean separation of concerns
- **Dynamic State Management** for interactive navigation
- **Responsive Design** that works on desktop, tablet, and mobile
- **Pixel-perfect styling** to mimic Spotify's dark theme and layout
- **Interactive Features** with click handlers and hover effects
- **Component-based Architecture** for easy maintenance and extension

## Features  
- 🏠 **Home page** with popular songs/albums organized in sections
- 🔍 **Search functionality** (UI ready for backend integration)
- 📚 **Sidebar navigation** with active state tracking (Home, Search, Your Library)
- 🎵 **Interactive playlist cards** with click handlers and hover animations
- 📱 **Fully responsive design** optimized for all screen sizes
- 🎨 **Dark theme** matching Spotify's #121212 color scheme
- ⚡ **Modern React patterns** with hooks and functional components

## Technologies Used  
- **React 18** - Modern React with hooks
- **JavaScript ES6+** - Modern JavaScript features
- **CSS3** - Flexbox, Grid, and responsive design
- **FontAwesome** - Icons and visual elements
- **HTML5** - Semantic markup structure

## Project Structure
```
├── components/
│   ├── Sidebar.js          # Navigation sidebar with active state
│   ├── Header.js           # Top navigation bar
│   ├── PlaylistSection.js  # Reusable section component
│   └── PlaylistCard.js     # Individual playlist/album card
├── data/
│   └── playlists.js        # Centralized data structure
├── public/
│   └── index.html          # HTML template
├── Images/                 # All original assets preserved
├── App.js                  # Root React component
├── App.css                 # Converted styles with responsive design
└── index.js                # React app entry point
```

## Setup & Running Locally  
1. Clone the repo:  
   ```bash
   git clone https://github.com/USERNAME/spotifyCloneHtmlCss.git
   cd spotifyCloneHtmlCss
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Available Scripts
- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Key Components

### Sidebar Component
- Handles main navigation (Home, Search, Your Library)
- Tracks active state with React useState
- Includes secondary links (Create Playlist, Liked Songs)
- Policy links at bottom

### Header Component
- Navigation buttons (Previous/Next)
- Top navigation links (Premium, Support, Download, Sign Up)
- Login button

### PlaylistSection Component
- Renders sections with titles and playlist grids
- Uses PlaylistCard components for individual items
- Fully responsive layout

### PlaylistCard Component
- Displays playlist image, title, and subtitle
- Hover effects with animated play button
- Click handlers that show song information

## Interactive Features
- **Sidebar Navigation**: Click any sidebar link to see active state changes
- **Playlist Cards**: Click any playlist to see an alert with song details
- **Hover Effects**: Cards show animated play buttons on hover
- **Responsive Design**: Seamlessly adapts to different screen sizes

## Original HTML/CSS Version
This React version was converted from the original HTML/CSS implementation. The original files are preserved in the repository for reference:
- `index.html` - Original HTML structure
- `style.css` - Original CSS styles
- `script.js` - Original JavaScript (now empty)

## Contributing
Feel free to submit issues and enhancement requests!

## License
This project is open source and available under the [MIT License](LICENSE).
