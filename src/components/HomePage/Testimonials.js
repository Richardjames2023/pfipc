import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonial-content">
        <h2 className="testimonial-title">Testimonials</h2>
        <p className="testimonial-text">
          Lorem ipsum dolor sit amet consectetur. Risus facilisi massa odio tincidunt nibh ac nisl pulvinar laoreet. 
          Pretium orci a sed porttitor suspendisse rutrum. Molestie mauris placerat massa nunc velit vestibulum. Lacus.
        </p>
        <p className="testimonial-author">Oluwafemi Samson, Ayems Design Co.</p>
        <div className="navigation-arrows">
          <span className="arrow left-arrow">←</span>
          <span className="arrow right-arrow">→</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
