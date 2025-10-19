import React from 'react';

const PlaylistCard = ({ playlist, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(playlist);
    }
  };

  return (
    <div className="playlist-card" onClick={handleClick}>
      <div className="card-image-container">
        <img src={playlist.image} alt={playlist.title} />
        <div className="play-button">
          <span className="fa fa-play"></span>
        </div>
      </div>
      <h4>{playlist.title}</h4>
      <p>{playlist.subtitle}</p>
    </div>
  );
};

export default PlaylistCard;
