import React from 'react';
import '../css/Contact.css'; // Import the CSS file

function ContactUs() {
  return (
    <div className="contact-container">
      <div className="contact-title">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-links">
          <h2>Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div>
        <div className="contact-info">
          <h2>Contact Information</h2>
          <address>
            123 Main St, City, Country
          </address>
          <p>Email: example@email.com</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="social-media">
          <h2>Follow Us</h2>
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
