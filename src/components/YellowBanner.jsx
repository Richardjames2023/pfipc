import React from "react";
import "./YellowBanner.css";

const YellowBanner = () => {
  return (
    <section className="yellow-banner">
      <div className="yellow-banner-content">
        <h2 className="yellow-banner-title">
          Join Our National Development Initiative
        </h2>
        <p className="yellow-banner-text">
          Be part of the movement driving sustainable growth and prosperity.
        </p>
        <button className="yellow-banner-btn">Learn More</button>
      </div>
    </section>
  );
};

export default YellowBanner;
