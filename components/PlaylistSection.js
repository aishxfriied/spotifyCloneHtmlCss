import React from 'react';
import PlaylistCard from './PlaylistCard';

const PlaylistSection = ({ section, onPlaylistClick }) => {
  return (
    <div className="spotify-playlist">
      <h2>{section.title}</h2>
      <div className="playlist-list">
        {section.playlists.map(playlist => (
          <PlaylistCard 
            key={playlist.id} 
            playlist={playlist} 
            onClick={onPlaylistClick}
          />
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;
