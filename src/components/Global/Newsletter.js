// src/components/Newsletter.js
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <h3>Sign up to our newsletter</h3>
      <p>Submit your email address to get insights that matter.</p>
      <div className="newsletter-input">
        <input type="email" placeholder="Enter email" />
        <button>Submit</button>
      </div>
    </section>
  );
};

export default Newsletter;
