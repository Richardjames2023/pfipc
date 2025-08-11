import React, { useState, useEffect } from 'react';
import './Banner.css';

const slides = [
  {
    title: '',
    description:
      '',
    buttonText: '',
    imageUrl: './images/banner1.png', // Replace with the actual path to each image
  },
  {
    title: '',
    description:
      '',
    buttonText: '',
    imageUrl: './images/banner1.png',
  },
  {
    title: '',
    description:
      '',
    buttonText: '',
    imageUrl: './images/banner1.png',
  },
  {
    title: '',
    description:
      '',
    buttonText: '',
    imageUrl: './images/banner1.png',
  },
  {
    title: '',
    description:
      '',
    buttonText: '',
    imageUrl: './images/banner1.png',
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change slides every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const currentSlide = slides[currentIndex];

  return (
    <div className="banner" style={{ backgroundImage: `url(${currentSlide.imageUrl})` }}>
      <div className="banner-content">
        <h1>{currentSlide.title}</h1>
        <p>{currentSlide.description}</p>
        <button>{currentSlide.buttonText}</button>
      </div>
      <div className="banner-dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Banner;
