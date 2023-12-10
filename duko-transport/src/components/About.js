import React from 'react';
import '../css/About.css'; // Import the CSS file with the correct relative path
import AboutBG from '../Assets/AboutBG.jpeg'; // Import the image file

function AboutUs() {
  return (
    <section id='about'>
      <div className="about-us">
        <div className='about-image'>
          <img src={AboutBG} alt="About Us Background" />
        </div>
        <div className="about-content">
          <h2 className='title'>About Us</h2>
          <p className="about-p2">
            Welcome to Duko Transport Inc, your trusted shipping solution right here in Ontario, Canada.
            We specialize in providing efficient and secure shipping services tailored to your local needs.
            Whether it's moving freight, managing logistics, or ensuring timely deliveries within Ontario, we're here to make it happen.
            With a strong commitment to reliability and customer satisfaction, Duko Transport Inc is your go-to partner for seamless transportation solutions.
            <br/><br/> Let's simplify your shipping experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
