import React from "react";
import "./ServicesCarousel.css";

const services = [
  "Partnership Facilitation",
  "Investment Advisory",
  "Legal Networking",
  "Professional Support",
  "Documentation",
];

const ServicesCarousel = () => {
  // Repeat enough times to ensure smooth looping
  const repeatedServices = [...services, ...services, ...services];

  return (
    <div className="service_carousel-container">
      <div className="carousel-track">
        {repeatedServices.map((service, idx) => (
        <a href="/services" className="carousel-item" key={idx}>
        {service}
        </a>
        ))}
      </div>
    </div>
  );
};

export default ServicesCarousel;



