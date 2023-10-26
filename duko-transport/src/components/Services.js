import React from 'react';
import '../css/Services.css'; // Import the CSS file for styling

function Services() {
  return (
    <section id='services' className="services-container">
      <div className="services-content">
        <h2>Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <h3>HEAT</h3>
            <p className='p-services'>
              Duko Transport Inc provides heated service from October 15 to April 14 yearly,
              to protect against freezing; this applies typically to health and beauty products and 
              other items not regulated by Health Canada under Guideline 0069.
            </p>
          </div>
          <div className="service-card">
            <h3>AMBIENT</h3>
            <p className='p-services'>
            Duko Transport Inc  provides year round temperature management at 15°- 25°C, 
            to support clients in meeting the requirements of Health Canada Guideline 0069. 
            Deliveries can be managed under this program to most major centres.
            </p>
          </div>
          <div className="service-card">
            <h3>DANGEROUS GOODS</h3>
            <p className='p-services'>
            Certain commodities are regulated for transport in Canada by provisions of 
            the Transportation of Dangerous Goods Act and Regulations. 
            Duko Transport is able to support the transport of Dangerous Goods by Ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
