// import React from 'react';
// import './InvestmentOpportunities.css';

// const InvestmentOpportunities = () => {
//   return (
//     <section className="investment-opportunities">
//       <div className="header-section">
//         <div className="header-content">
//           <h2>Investment Opportunities</h2>
//           <p>
//             PFIPC encourages foreign investment in sectors vital to Nigeria’s economic development. Our focus is on promoting sustainable, high-impact investments that align with Nigeria’s industrialization and growth strategies.
//           </p>
//         </div>
//         <div className="overlapping-title">
//           <h4>Key Sectors Open for Investment:</h4>
//         </div>
//       </div>
//       <div className="divider">
//         <span className="divider-dot"></span>
//       </div>
//       <div className="sectors-section">
//         <div className="sectors-grid">
//           <div className="sector-card">
//             <img src="./images/agric.jpg" alt="Agriculture" />
//             <div className="overlay">
//               <span>01 - Agriculture:</span>
//             </div>
//           </div>
//           <div className="sector-card">
//             <img src="./images/manufacturing.jpg" alt="Manufacturing" />
//             <div className="overlay">
//               <span>02 - Manufacturing:</span>
//             </div>
//           </div>
//           <div className="sector-card">
//             <img src="./images/tech.jpg" alt="Technology" />
//             <div className="overlay">
//               <span>03 - Technology:</span>
//             </div>
//           </div>
//           <div className="sector-card">
//             <img src="./images/mining.jpg" alt="Mining" />
//             <div className="overlay">
//               <span>04 - Mining:</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default InvestmentOpportunities;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './InvestmentOpportunities.css';

const sectors = [
  { id: '01', title: 'Agriculture', image: '/images/agric.jpg' },
  { id: '02', title: 'Manufacturing', image: '/images/manufacturing.jpg' },
  { id: '03', title: 'Technology', image: '/images/tech.jpg' },
  { id: '04', title: 'Mining', image: '/images/mining.jpg' },
];

const InvestmentOpportunities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="investment-opportunities">
      <div className="investment_container">
        <div className="intro" data-aos="fade-up">
          <h2>Investment Opportunities</h2>
          <p>
            PFIPC encourages foreign investment in sectors vital to Nigeria’s economic development. Our focus is on promoting sustainable, high-impact investments that align with Nigeria’s industrialization and growth strategies.
          </p>
        </div>

        <div className="highlight-title" data-aos="zoom-in">
          <h4>Key Sectors Open for Investment:</h4>
        </div>

        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <div
              className="sector-card"
              key={sector.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <img src={sector.image} alt={sector.title} />
              <div className="overlay">
                <span className="sector-number">{sector.id}</span>
                <h3>{sector.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentOpportunities;
