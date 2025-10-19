import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PlaylistSection from './components/PlaylistSection';
import playlistsData from './data/playlists';

function App() {
  const [activeLinkId, setActiveLinkId] = useState(1);

  const handleLinkClick = (linkId) => {
    setActiveLinkId(linkId);
  };

  const handlePlaylistClick = (playlist) => {
    alert(`Playing: ${playlist.title}\nArtist: ${playlist.subtitle}`);
  };

  return (
    <div className="App">
      <Sidebar 
        sidebarLinks={playlistsData.sidebarLinks}
        secondaryLinks={playlistsData.secondaryLinks}
        activeLinkId={activeLinkId}
        onLinkClick={handleLinkClick}
      />
      
      <div className="main-container">
        <Header headerLinks={playlistsData.headerLinks} />
        
        {playlistsData.sections.map((section, index) => (
          <PlaylistSection 
            key={index} 
            section={section} 
            onPlaylistClick={handlePlaylistClick}
          />
        ))}
        
        <hr />
        
        <div className="preview">
          <div className="text">
            <h6>Preview of Spotify</h6>
            <p>Sign Up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
          </div>
          <div className="button">
            <button type="button">Sign Up for free</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
