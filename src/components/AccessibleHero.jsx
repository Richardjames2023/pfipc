// import React from "react";
// import "./AccessibleHero.css";
// import heroImage from "../assets/pfipc.jpg"; // Replace with your actual image path

// const AccessibleHero = () => {
//   return (
//     <section
//       className="accessible-hero"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="accessible-hero-overlay"></div>
//       <div className="accessible-hero-content">
//         <p className="accessible-hero-subtitle">Accessible Partout :</p>
//         <h1>
//           Piloter votre entreprise
//           <br />
//           partout ou vous êtes.
//         </h1>
//         <button className="accessible-hero-btn">
//           <span className="play-icon">▶</span> Découvrir plus
//         </button>
//       </div>
//     </section>
//   );
// };

// export default AccessibleHero;

import React from "react";
import "./AccessibleHero.css";
import heroImage from "../assets/pfipc.jpg"; // Replace with your actual image path

const AccessibleHero = () => {
  return (
    <section
      className="accessible-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="accessible-hero-overlay"></div>
      <div className="accessible-hero-content">
        <div className="investment-keywords">
          <span>Economic Opportunity</span>
          <span className="triangle">▶</span>
          <span>Favourable Investment Policies</span>
          <span className="triangle">▶</span>
          <span>Profit Repatriation</span>
        </div>
      </div>
    </section>
  );
};

export default AccessibleHero;

