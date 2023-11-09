import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import '../css/Contact.css';

function Contact() {
  const form = useRef();
  const [emailValidation, setEmailValidation] = useState(null);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate email address
    const emailInput = form.current['from_email'];
    const isEmailValid = validateEmail(emailInput.value);

    if (!isEmailValid) {
      setEmailValidation('Please enter a valid email address.');
      return;
    } else {
      setEmailValidation(null);
    }

    emailjs.sendForm('service_mxh6ee9', 'template_tmh73ar', form.current, '_HSyeYnLWZZOGQNPo')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');

        // Clear the form
        form.current.reset();
      }, (error) => {
        console.log(error.text);
        alert('Email sending failed. Please try again.');
      });
  };

  return (
    <section id='contact'>
      <div className="contact-container">
        <div className="contact-title">
          <h2>Contact Us</h2>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <h2>Contact</h2>
            <form ref={form} onSubmit={sendEmail} className='form'>
              <div className="form-group">
                <input type="text" name="from_name" placeholder="Your Name" required />
                <input type="email" name="from_email" placeholder="Your Email" required />
                {emailValidation && <p className="validation-error">{emailValidation}</p>}
              </div>
              <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="contact-info">
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

export default Contact;
