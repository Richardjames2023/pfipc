import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">The Presidency</div>
      <div className="header-contact">
        <span>Email: info@pfipc.gov.ng</span>
        <span>Phone: +234-XXX-XXXXXXX</span>
        <span>Address: PFIPC Headquarters, Abuja, Nigeria</span>
      </div>
      <nav className="header-nav">
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/investment">Investment Opportunities</a>
        <a href="/services">Our Services</a>
        <a href="/news">News and Resources</a>
      </nav>
      <div className="header-actions">
        <button>Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
