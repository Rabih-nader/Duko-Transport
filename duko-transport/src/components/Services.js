import React from 'react';
import '../css/Services.css'; // Import the CSS file for styling

function Services() {
  return (
    <section className="services-container">
      <div className="services-content">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>Service Category</h3>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              <li>Service 3</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Service Category</h3>
            <ul>
              <li>Service 4</li>
              <li>Service 5</li>
              <li>Service 6</li>
            </ul>
          </div>
          <div className="service-card">
            <h3>Service Category</h3>
            <ul>
              <li>Service 7</li>
              <li>Service 8</li>
              <li>Service 9</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
