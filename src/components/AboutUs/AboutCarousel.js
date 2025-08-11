import React from 'react';
import './AboutCarousel.css';

const AboutCarousel = () => {
  return (
    <div
      className="about-carousel"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/aboutcarousel.jpg)`,
      }}
    >
      <div className="carousel-overlay">
        <div className="carousel-content">
          <h1 className="carousel-heading">About Presidential Foreign Investment Promotion Council (PFIPC)</h1>
          <p className="carousel-description">
            The Presidential Foreign Investment Promotion Council (PFIPC) is dedicated to promoting, facilitating, and developing
            foreign investments in Nigeria.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCarousel;
