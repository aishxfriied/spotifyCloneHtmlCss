import React from 'react';

const Sidebar = ({ sidebarLinks, secondaryLinks, activeLinkId, onLinkClick }) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <a href="#">
          <img src="./Images/logo.png" alt="logo" />
        </a>
      </div>
      
      <div className="navigation" id="upper">
        <ul>
          {sidebarLinks.map(link => (
            <li key={link.id}>
              <a 
                href="#" 
                className={activeLinkId === link.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  onLinkClick(link.id);
                }}
              >
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navigation">
        <ul>
          {secondaryLinks.map(link => (
            <li key={link.id}>
              <a href="#">
                <i className={link.icon}></i>
                <span>{link.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="policies">
        <ul>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">Privacy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
