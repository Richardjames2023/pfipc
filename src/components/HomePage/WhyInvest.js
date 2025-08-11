import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './WhyInvest.css';
import Image1 from "../../assets/pfipc-one.jpg";

const WhyInvest = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="why-invest">
      <div className="why-invest-container" data-aos="fade-up">
        <div className="why-invest-image">
          <img src={Image1} alt="Investment scene" />
        </div>
        <div className="why-invest-text">
          <h5 className="why-invest-subtitle">A Presidential Investment Gateway</h5>
          <h1 className="why-invest-title">
            Nigeria: A Strategic Destination <br /> for Global Investors
          </h1>
          <p className="why-invest-description">
            With Africa’s largest economy, Nigeria offers dynamic opportunities for growth, trade, and innovation.
            The PFIPC ensures a seamless investment journey through legal support, sector insights, and institutional facilitation.
          </p>
          <a href="#learn-more" className="why-invest-button">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default WhyInvest;








