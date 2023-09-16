import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './css/Projects.css';

import projectImage1 from '../Assets/7b1f7e6f57bd1d7652f546450b2808c5dd6ecc00-1024x504.webp';
import projectImage2 from '../Assets/2b6152154020263.Y3JvcCwzNDUxLDI3MDAsMTExOSww.png';
import projectImage3 from '../Assets/kfpb47vavqu61.jpeg';
import projectImage4 from '../Assets/portfolio_thumbnails_mock_up_sm.webp';
import projectImage5 from '../Assets/Screenshot-2021-10-11-at-12.11.56.png';
import projectImage6 from '../Assets/Screenshot-2021-12-06-at-11.30.03.png';



const projectImages = [
  projectImage1,
  projectImage2,
  projectImage3,
  projectImage4,
  projectImage5,
  projectImage6,
  // Add more image URLs as needed
];
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,

};

function Projects() {
  return (
    <section>
      <h2>Projects</h2>

      <div className="slider-container" >
        <div className="slider-wrapper" >
          <Slider {...sliderSettings}>
            {projectImages.map((imageUrl, index) => (
              <div key={index}>
                <img  src={imageUrl} alt={`Project ${index + 1}`} style={{ width: '100%', height: '250px'}} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Projects;