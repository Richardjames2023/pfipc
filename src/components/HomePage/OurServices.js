import React from 'react';
import { Link } from 'react-router-dom';
import './OurServices.css';

const services = [
  {
    title: 'Promote Foreign Investment',
    description: 'At PFIPC, we actively promote and highlight various investment opportunities across Nigeria’s key sectors.',
    image: './images/pfi.png',
    link: 'promote', // Unique link identifier for each service
  },
  {
    title: 'Facilitate Foreign Investment',
    description: 'PFIPC is committed to creating an investment-friendly framework that fosters investor success and growth.',
    image: './images/ffi.png',
    link: 'facilitate',
  },
  {
    title: 'Advocate Foreign Investment Policy',
    description: 'As a strong advocate for foreign investors, PFIPC represents investor interests during policy-making processes and regulatory reviews.',
    image: './images/afi.png',
    link: 'advocate',
  },
  {
    title: 'Develop Foreign Investment',
    description: 'Beyond facilitating investment, PFIPC is dedicated to providing ongoing support and aftercare services to ensure long-term investor satisfaction.',
    image: './images/dfi.png',
    link: 'develop',
  },
];

const OurServices = () => {
  return (
    <section className="our-services">
      <div className="header">
        <h2 className="section-title">Our Services</h2>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur. Et convallis nulla fermentum scelerisque ac at quis purus. Malesuada posuere donec ac massa elit urna ornare pharetra a.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <Link to={`/services#${service.link}`} className="service-button">
              {service.title} <span className="arrow">→</span>
            </Link>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;
