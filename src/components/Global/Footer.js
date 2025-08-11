// Footer.js
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="newsletter-section">
        <h2>Sign up to our newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter email" className="email-input" />
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
        <p className="newsletter-text">
          Submit your email address to Sign up and get the insights that matter. Keep up to date with regulatory updates, events and updates.
        </p>
      </div>
      <div className="links-section">
        <h3>QUICK LINK</h3>
        <ul>
          <li>About us</li>
          <li>Investment Opportunities</li>
          <li>Our Services</li>
          <li>News and Insights</li>
        </ul>
      </div>
      <div className="contact-section">
        <h3>CONTACT US</h3>
        <p>Address: PFIPC Headquarters, Abuja, Nigeria</p>
        <p>Email: <a href="mailto:info@pfipc.gov.ng">info@pfipc.gov.ng</a></p>
        <p>Phone: +234-XXX-XXXXXXX</p>
      </div>
      <div className="social-section">
        <h3>KEEP IN TOUCH</h3>
        <div className="social-icons">
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
