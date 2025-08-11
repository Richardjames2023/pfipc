import React, { useState } from 'react';
import './ServiceList.css';
import { servicesData } from './servicesData';

const ServiceList = () => {
  const [selectedService, setSelectedService] = useState(servicesData[0]);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="service-list-container">
      {/* Left Column - Service List */}
      <div className="service-list">
        <h2 className="service-list-title">SERVICE LIST</h2>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`service-item ${selectedService.title === service.title ? 'active' : ''}`}
            onClick={() => handleServiceClick(service)}
          >
            <span className="service-number">{`0${index + 1}`}</span>
            <span className="service-title">{service.title}</span>
            <span className="service-arrow">→</span>
          </div>
        ))}
      </div>

      {/* Right Column - Service Details */}
      <div className="service-details">
        <div className="service-image">
          <img src={selectedService.image} alt={selectedService.title} />
        </div>
        <div className="service-content">
          <h3 className="service-detail-title">{selectedService.title}</h3>
          <p className="service-description">{selectedService.description}</p>
          <ul>
            {selectedService.details.map((detail, idx) => (
              <li key={idx}>
                <svg
                  className="green-tick"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 19L3 12.5l2-2.5 4 4L19 5l2 2-12 12z" />
                </svg>
                <strong>{detail.title}:</strong> {detail.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
