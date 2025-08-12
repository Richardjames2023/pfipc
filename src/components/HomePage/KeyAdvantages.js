
import React, { useEffect, useState } from 'react';
import './KeyAdvantages.css';

const cardData = [
  {
    number: "01",
    title: "Economic Opportunities",
    description: "Invest in Nigeria's rapidly expanding economy with immense potential in sectors like manufacturing, agriculture, and technology.",
  },
  {
    number: "02",
    title: "Favorable Investment Policies",
    description: "PFIPC guarantees legal protection from expropriation and ensures transparency in resolving disputes.",
  },
  {
    number: "03",
    title: "Profit Repatriation",
    description: "After fulfilling tax obligations, investors can transfer their profits abroad with the necessary approvals.",
  },
];

const KeyAdvantages = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate flip every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="key-advantages">
      <h2 className="key-section-title">Key Advantages of Investing in Nigeria</h2>
      <div className="grid-container">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flip-card ${activeIndex === index ? "active" : ""}`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div className="flip-inner">
              <div className="flip-front">
                <span className="card-number">{card.number}</span>
                <h3 className="card-title">{card.title}</h3>
              </div>
              <div className="flip-back">
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyAdvantages;







