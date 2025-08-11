import React from 'react';
import './BusinessHour.css';

const BusinessHour = () => {
  return (
    <section className="business-hour-section">
      <div className="business-hour-content">
        {/* Left Column - Business Hours Info */}
        <div className="business-info">
          <h2 className="business-title">Business Hours</h2>
          <p className="business-time">Mon – Fri: 9am – 4pm</p>
          <p className="business-time">Sat – Sun: Closed</p>
        </div>

        

        {/* Right Column - Image */}
        <div className="business-image">
          <img src="./images/clock.png" alt="Business Hours Clock" />
        </div>
      </div>

      {/* Divider Line */}
      <div className="divider">
        <div className="divider-line"></div>
        <div className="divider-circle"></div>
        <div className="divider-line"></div>
      </div>
    </section>
  );
};

export default BusinessHour;
