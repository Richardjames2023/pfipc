// TopHeader.js
import React from 'react';
import './TopHeader.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const TopHeader = () => {
  return (
    <div className="top-header">
      <div className="logo-section">
        <img src="./images/logo.png" alt="The Presidency Logo" className="logo" />
        <span className="logo-text">THE PRESIDENCY</span>
      </div>
      <div className="info-section">
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <span>Email: </span>
          <a href="mailto:info@pfipc.gov.ng">info@pfipc.gov.ng</a>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <span>Phone: </span>
          <span>+234-XXX-XXXXXXX</span>
        </div>
        <div className="info-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <span>Address: </span>
          <span>PFIPC Headquarters, Abuja, Nigeria</span>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
