import React from 'react';
import './css/About.css';

function About() {
  return (
    <section className="section" id="about">
      <div className="about-content">
        <div style={{ width: '50%' }}>
         
        <h2 style={{ paddingBottom: '20px' }}>About Me</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut arcu metus, volutpat non vehicula nec, <br />
          Proin sagittis mauris commodo nulla facilisis cursus. Aenean quam libero, tempus eu lobortis non, tincidunt nec nulla. Pellentesque id ex ex.<br />
          Aliquam rhoncus sodales dolor ac pharetra. Nullam sit amet ultricies nunc. Nulla gravida turpis in metus mattis dignissim. Praesent ut molestie lorem, non rhoncus urna.
        </p>
      </div>
      <div className="container">
        <button className="button">Resume</button>
      </div>
    </div>
  </section>
);
}

export default About;
