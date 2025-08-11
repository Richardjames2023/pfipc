// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './AboutUs.css';

// const AboutUs = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="about-us">
//       <div className="about-content">
//         <div className="image-section">
//           <img src="./images/manholding.png" alt="Man holding globe" className="main-image" />
//         </div>
//         <div className="text-section">
//           <h4 className="subtitle">About Us</h4>
//           <h1 className="title">Welcome to the Presidential Foreign Investment Promotion Council (PFIPC)</h1>
//           <p className="description">
//             Presidential Foreign Investment Promotion Council (PFIPC) is dedicated to promoting, facilitating, and developing foreign investments in Nigeria. With a mandate to create a secure and transparent investment environment, PFIPC ensures that foreign investors enjoy the same rights and protections as local businesses under the Foreign...
//           </p>
//           <button className="learn-more-button" onClick={() => navigate('/about')}>
//             Learn more
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUs.css';

const AboutUs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="about-us">
      <div className="container">
        <div className="about-content">
          <div className="image-section" data-aos="fade-right">
            <img
              src="./images/manholding.png"
              alt="Man holding globe"
              className="main-image"
            />
          </div>
          <div className="text-section" data-aos="fade-left">
            <h4 className="subtitle">About Us</h4>
            <h1 className="title">
              Welcome to the Presidential Foreign Investment Promotion Council (PFIPC)
            </h1>
            <p className="description">
              Presidential Foreign Investment Promotion Council (PFIPC) is dedicated to promoting,
              facilitating, and developing foreign investments in Nigeria. With a mandate to create
              a secure and transparent investment environment, PFIPC ensures that foreign investors
              enjoy the same rights and protections as local businesses under the Foreign Investment
              Framework.
            </p>
            <button className="learn-more-button" onClick={() => navigate('/about')}>
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


