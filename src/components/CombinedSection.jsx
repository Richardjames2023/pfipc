import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CombinedSection.css';

const protections = [
  {
    title: 'Expropriation Protection',
    description:
      'Safeguards against expropriation or nationalization without due process.',
  },
  {
    title: 'Additional Expropriation Protection',
    description:
      'Details on additional protections for investments.',
  },
  {
    title: 'Incentives for Export-Oriented Investments',
    description:
      'Policies to encourage export-oriented investments with various incentives.',
  },
];

const CombinedSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="combined-section">
      <div className="combined-container">
        {/* Left Side: Legal Framework */}
        <div className="text-side" data-aos="fade-right">
          <h4 className="subtitle">Legal Framework</h4>
          <h2 className="title">
            The Foreign Investment Promotion Act (FIPA) provides the legal foundation for foreign investments in Nigeria.
          </h2>
          <p className="description">
            Under this Act, foreign investors enjoy the same rights and protections as local businesses, and their
            investments are safeguarded from expropriation, except in cases of public interest with proper compensation.
          </p>
          <h5 className="key-protections-title">Key Investor Protections:</h5>
          <ul className="protection-list">
            {protections.map((item, index) => (
              <li
                key={index}
                className="protection-item"
                onClick={() => toggleDescription(index)}
              >
                <div className="protection-header">
                  <span className="protection-number">{`0${index + 1}`}</span>
                  <span className="protection-title">{item.title}</span>
                  <span className={`arrow ${expandedIndex === index ? 'active' : ''}`}>
                    →
                  </span>
                </div>
                {expandedIndex === index && (
                  <p className="protection-description">{item.description}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: About Us */}
        <div className="right-side-text text-side" data-aos="fade-left">
          <h4 className="subtitle">About Us</h4>
          <h2 className="title">
            Welcome to the Presidential Foreign Investment Promotion Council (PFIPC)
          </h2>
          <p className="description">
            The Presidential Foreign Investment Promotion Council (PFIPC) is dedicated to promoting, facilitating,
            and developing foreign investments in Nigeria. With a mandate to create a secure and transparent
            investment environment, PFIPC ensures that foreign investors enjoy the same rights and protections
            as local businesses under the Foreign Investment Promotion Act (FIPA).
          </p>
          <button className="learn-more-button" onClick={() => window.location.href = '/about'}>
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default CombinedSection;
