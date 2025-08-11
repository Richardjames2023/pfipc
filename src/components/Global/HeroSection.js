// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Ready to Invest in Nigeria?</h1>
      <p>We are here to guide you every step of the way. For personalized consultations, please contact us:</p>
      <div className="hero-buttons">
        <button className="speak-button">Speak to an Expert</button>
        <button className="inquiry-button">Fill out our online inquiry form</button>
      </div>
    </section>
  );
};

export default HeroSection;
