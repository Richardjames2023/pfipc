import React, { useState } from 'react';
import './LegalFramework.css';

const LegalFramework = () => {
  // State to track which item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function to expand/collapse the item
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="legal-framework">
      <div className="content">
        <div className="image-section">
          <img src="./images/legalframe.png" alt="Main Image" className="main-image" />
        </div>
        <div className="text-section">
          <h4 className="subtitle">Legal Framework</h4>
          <h1 className="title">
            The Foreign Investment Promotion Act (FIPA) provides the legal foundation for foreign investments in Nigeria.
          </h1>
          <p className="description">
            Under this Act, foreign investors enjoy the same rights and protections as local businesses, and their investments are safeguarded from expropriation, except in cases of public interest with proper compensation.
          </p>
          <h5 className="key-protections-title">Key Investor Protections:</h5>
          <ul className="protection-list">
            {[
              { title: 'Expropriation Protection', description: 'Safeguards against expropriation or nationalization without due process.' },
              { title: 'Additional Expropriation Protection', description: 'Details on additional protections for investments.' },
              { title: 'Incentives for Export-Oriented Investments', description: 'Policies to encourage export-oriented investments with various incentives.' },
            ].map((item, index) => (
              <li key={index} onClick={() => toggleDescription(index)} className="protection-item">
                <div className="protection-header">
                  <span className="protection-number">{`0${index + 1}`}</span>
                  <span className="protection-title">{item.title}</span>
                  <span className={`arrow ${expandedIndex === index ? 'active' : ''}`}>→</span>
                </div>
                {expandedIndex === index && (
                  <p className="protection-description">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LegalFramework;
