import React from 'react';
import './GetInTouch.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';


const GetInTouch = () => {
  return (
    <section className="get-in-touch-section">
      <div className="contact-info">
        <h2 className="contact-title">Get in touch</h2>
        <div className="contact-details">
        <p>We are here to answer any question you may have. Feel free to reach via contact form.</p>
        <p><FaMapMarkerAlt /> <strong>Address:</strong> PFIPC Headquarters, Abuja, Nigeria</p>
        <p><FaEnvelope /> <strong>Email:</strong> info@pfipc.gov.ng</p>
        <p><FaPhone /> <strong>Phone:</strong> +234-XXX-XXXXXXX</p>
        </div>
      </div>
      
      <div className="contact-form">
        <form>
          <div className="form-row">
            <input type="text" name="fullName" placeholder="Full name" required />
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="tel" name="phone" placeholder="Phone number" required />
            <input type="text" name="service" placeholder="What service are you looking for?" />
          </div>
          <div className="form-row full-width">
            <textarea name="message" placeholder="Message" rows="4"></textarea>
          </div>
          <div className="form-row full-width">
            <label className="terms">
              <input type="checkbox" name="terms" required />
              I am bound by the terms of the Service I accept Privacy Policy
            </label>
          </div>
          <button type="submit" className="submit-button">Send message →</button>
        </form>
      </div>
    </section>
  );
};

export default GetInTouch;
