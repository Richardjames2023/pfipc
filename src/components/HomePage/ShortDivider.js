import React from 'react';
import './ShortDivider.css';

const ShortDivider = () => {
  return (
    <div className="divider-container">
      <div className="line"></div>
      <div className="circle circle-left"></div>
      <div className="circle circle-center"></div>
      <div className="circle circle-right"></div>
    </div>
  );
};

export default ShortDivider;
