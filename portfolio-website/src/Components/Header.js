//Header

import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
