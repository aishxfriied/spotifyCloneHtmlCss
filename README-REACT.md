# Spotify Clone - React Version

This is a React conversion of the Spotify clone that was originally built with HTML and CSS. The project now uses modular React components with dynamic rendering and state management.

## Project Structure

```
├── components/
│   ├── Sidebar.js          # Navigation sidebar with active state
│   ├── Header.js           # Top navigation bar
│   ├── PlaylistSection.js  # Reusable section component
│   └── PlaylistCard.js     # Individual playlist/album card
├── data/
│   └── playlists.js        # Data structure for playlists and navigation
├── public/
│   └── index.html          # Main HTML template
├── Images/                 # All existing images (unchanged)
├── App.js                  # Root React component
├── App.css                 # Converted styles with responsive design
├── index.js                # React app entry point
└── package.json            # Dependencies and scripts
```

## Features

- **Modular Components**: Clean separation of concerns with reusable components
- **Dynamic State Management**: Active sidebar selection tracking
- **Interactive Playlist Cards**: Click handlers that alert song information
- **Responsive Design**: Mobile-friendly layout with CSS media queries
- **Dark Theme**: Preserved original Spotify-inspired dark theme (#121212)
- **FontAwesome Icons**: Maintained original icon styling

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## Key Components

### Sidebar Component
- Handles navigation links (Home, Search, Your Library)
- Tracks active state with React useState
- Includes secondary links (Create Playlist, Liked Songs)
- Policy links at bottom

### Header Component
- Navigation buttons (Previous/Next)
- Top navigation links (Premium, Support, Download, Sign Up)
- Login button

### PlaylistSection Component
- Renders a section with title and list of playlists
- Uses PlaylistCard components for individual items

### PlaylistCard Component
- Displays playlist image, title, and subtitle
- Hover effects with play button animation
- Click handler that alerts song information

## Data Structure

The `data/playlists.js` file contains:
- **sections**: Array of playlist sections (Spotify Playlists, Chill, Trending)
- **sidebarLinks**: Main navigation items with active state
- **secondaryLinks**: Additional sidebar links
- **headerLinks**: Top navigation items

## Styling

- Converted from original `style.css` to `App.css`
- Added responsive design with mobile breakpoints
- Maintained original dark theme and Spotify-inspired styling
- Enhanced with CSS transitions and hover effects

## Interactivity

- **Sidebar Navigation**: Clicking sidebar links updates active state
- **Playlist Cards**: Clicking any playlist card shows an alert with song title and artist
- **Hover Effects**: Cards show play button on hover with smooth animations

## Browser Support

- Modern browsers supporting ES6+ and React 18
- Responsive design works on desktop, tablet, and mobile devices

## Original Assets

All original images from the `Images/` folder are preserved and used in the React components with the same file paths.
