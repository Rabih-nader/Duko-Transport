import React from 'react';
import '../css/About.css'; // Import the CSS file with the correct relative path

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-title">
        <h2 className='title'>About Us</h2>
      </div>
      <div className="about-content">
        <p className="about-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget felis ut odio sollicitudin elementum.
          Suspendisse potenti. Proin bibendum ante at quam accumsan, id interdum odio finibus. Vivamus volutpat
          vestibulum velit, a feugiat arcu hendrerit at. Sed hendrerit massa eu libero luctus, vel ultricies urna
          tincidunt. Suspendisse potenti.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
