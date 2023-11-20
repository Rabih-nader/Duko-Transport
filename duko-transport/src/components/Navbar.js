import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll'; // Import ScrollLink
import '../css/Navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Define a dynamic CSS class based on the isMobileMenuOpen state
  const navbarClass = `navbar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`;

  return (
    <nav className={navbarClass}>
      <div className="navbar-left">

      <img
  src={require('../Assets/DUKO trasport inc.png')}
  alt="Logo"
  className="logo-image"
  style={{ width: '100px', height: 'auto' }}
/>

        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      <ul className={`navbar-right ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>

        <li><ScrollLink 
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={closeMobileMenu}

        >
          Home
          </ScrollLink></li>

        <li><ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={closeMobileMenu}
        >
          About Us
        </ScrollLink></li>
        <li><ScrollLink
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Services
        </ScrollLink></li>
        <li><ScrollLink
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
          onClick={closeMobileMenu}
        >
          Contact Us
        </ScrollLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
