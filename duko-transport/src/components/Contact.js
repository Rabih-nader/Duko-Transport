import React from 'react';
import '../css/Contact.css'; // Import the CSS file

function ContactUs() {
  return (
    <section id='contact'>
    <div className="contact-container">
      <div className="contact-title">
        {/* <h2>Contact Us</h2> */}
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Send Message</h2>
          <form className='form'>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" />
              <input type="email" id="email" name="email" placeholder="Your Email" />
            </div>
            <textarea id="message" name="message" rows="4" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="contact-info">
          <h2>Contact</h2>
          <address>
          46 Leith Dr, Bradford West Gwillimbury, ON
          </address>
          <p>Email: dukotransportinc@email.com</p>
          <p>Phone: +1 (647) 501-2092</p>
        </div>
      </div>
    </div>
    </section>
  );
}

export default ContactUs;
