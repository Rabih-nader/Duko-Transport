import React from 'react';
import '../css/Footer.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    // <footer>
    //   <div className="footer-content">
    //     <p className="footer-text">&copy; 2023 Duko Transport Inc.</p>
    //     <button className="scroll-button" onClick={scrollToTop}>
    //       <FontAwesomeIcon icon={faAngleUp} />
    //     </button>
    //   </div>
    // </footer>

    <footer className="footer">
    <div className="footer-content">
    <p className="footer-text">&copy; 2023 Duko Transport Inc.</p>
      <button className="scroll-button" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </div>
  </footer>
  );
}

export default Footer;
