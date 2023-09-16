import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css'; // Import the CSS file with the correct relative path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Duko Transport</h1>
      </div>
      <div className="navbar-right">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
