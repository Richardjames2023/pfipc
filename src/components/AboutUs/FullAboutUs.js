import React from 'react';
import './FullAboutUs.css';

const FullAboutUs = () => {
    return (
        <section className="about-us" id="fullAboutUs">
          <div className="about-content">
            <div className="image-section">
              <img src="./images/manholding.png" alt="Man holding globe" className="main-image" />
            </div>
            <div className="text-section">
              <h4 className="subtitle">About Us</h4>
              <h1 className="title">Welcome to the Presidential Foreign Investment Promotion Council (PFIPC)</h1>
              <p className="description">
                Presidential Foreign Investment Promotion Council (PFIPC) is dedicated to promoting, facilitating, and developing foreign investments in Nigeria. With a mandate to create a secure and transparent investment environment, PFIPC ensures that foreign investors enjoy the same rights and protections as local businesses under the Foreign...
              </p>
              <p className='description'>Our agency is committed to fostering economic growth, innovation, and sustainable development by promoting investment opportunities across
              diverse sectors such as industry, mining, agriculture, technology, and services.</p>
              
            </div>
          </div>
        </section>
      );
};

export default FullAboutUs;
