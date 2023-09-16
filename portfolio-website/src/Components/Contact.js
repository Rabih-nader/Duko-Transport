import React from 'react';
import './css/Contact.css';


function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <p>Feel free to get in touch with us</p>

      <div className="input-container">
        <div className="text-box">
          <input type="text" placeholder="Full Name" id="name" />
        </div>

        <div className="text-box">
          <input type="email" placeholder="Email" id="email" />
        </div>
      </div>

      <div className="input-container">
        <div className="text-box">
          <input type="phone" placeholder="Phone Number" id="phone" />
        </div>
      </div>

      <div className="text-area">
        <textarea id="message" placeholder="Type your message here" rows="4" />
      </div>

      <div>
        <button className="button-submit">Submit</button>
      </div>

      <div>
        <div style={{ border: 'solid', borderBlockColor: 'red' }}>
          <p>
            Address: Hanmer Street east <br />
            Phone: 1 (705) 241-7389<br />
            Email: Rabih.nadir@gmail.com
          </p>
        </div>

        <div style={{ border: 'solid', borderBlockColor: 'blue' }}>

        </div>
      </div>
    </section>
  );
}

export default Contact;
