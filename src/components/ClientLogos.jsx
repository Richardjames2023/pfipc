import React from "react";
import "./ClientLogos.css";
import CBN from "../assets/CBN-logo.jpg"
import Agric2 from "../assets/Agric2.webp"

const logos = [
  { src: CBN, alt: "Client 1" },
  { src: Agric2, alt: "Client 2" },
  { src: CBN, alt: "Client 3" },
  { src: Agric2, alt: "Client 4" },
  { src: CBN, alt: "Client 5" },
  { src: Agric2, alt: "Client 6" },
];

const ClientLogos = () => {
  // Duplicate the logos for seamless scrolling
  const loopedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="client-logos">
      <div className="logos-slider">
        <div className="logos-track">
          {loopedLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;


