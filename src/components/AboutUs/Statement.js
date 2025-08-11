import React from 'react';
import './Statement.css';

const Statement = () => {
  return (
    <section className="statement-section">
      <div className="statement-container">
        <div className="statement-item">
          <h3 className="statement-title">Vision:</h3>
          <p className="statement-description">
            To be the world’s preferred investment destination.
          </p>
        </div>
        <div className="statement-item">
          <h3 className="statement-title">Mission:</h3>
          <p className="statement-description">
            To identify, promote, and facilitate opportunities for foreign investments for the prosperity and well-being of Nigeria.
          </p>
        </div>
        <div className="statement-item">
          <h3 className="statement-title">Core Values:</h3>
          <p className="statement-description">
            Patriotism, Integrity, Partnership, and Professionalism.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Statement;
