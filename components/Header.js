import React from 'react';

const Header = ({ headerLinks }) => {
  return (
    <div className="topbar">
      <div className="prev-next-buttons">
        <button type="button" className="fa fas fa-chevron-left"></button>
        <button type="button" className="fa fas fa-chevron-right"></button>
      </div>
      <div className="navbar">
        <ul>
          {headerLinks.map((link, index) => (
            <li key={index}>
              <a href="#">{link}</a>
            </li>
          ))}
          <li className="divider">|</li>
          <li><a href="#">Sign Up</a></li>
        </ul>
        <button type="button">Login In</button>
      </div>
    </div>
  );
};

export default Header;
