import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h1>Duko Transport</h1>
      </div>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
        <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <ul className={`navbar-right ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
