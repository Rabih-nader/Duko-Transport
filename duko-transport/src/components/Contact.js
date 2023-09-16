import React from 'react';

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-title">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-links">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <address>
          123 Main St, City, Country
        </address>
        <p>Email: example@email.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
      <div className="social-media">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
      </div>
    </div>
  );
}

export default ContactUs;
