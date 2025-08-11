// import React from "react";
// import { FaHandshake, FaChartLine, FaBalanceScale, FaGlobe, FaUserTie, FaFileAlt } from "react-icons/fa";
// import "./ProvidedServicesSection.css";

// const ServicesSection = () => {
//   const services = [
//     {
//       title: "Partnership Facilitation",
//       description: "We facilitate strategic partnerships between foreign interventions and local stakeholders.",
//       icon: <FaHandshake className="service-icon" />
//     },
//     {
//       title: "Investment Advisory",
//       description: "Expert guidance on intervention opportunities and market analysis across various sectors.",
//       icon: <FaChartLine className="service-icon" />
//     },
//     {
//       title: "Legal Protection",
//       description: "Comprehensive legal support and protection for foreign intervention initiatives.",
//       icon: <FaBalanceScale className="service-icon" />
//     },
//     {
//       title: "Global Network",
//       description: "Access to our extensive network of international partners and local experts.",
//       icon: <FaGlobe className="service-icon" />
//     },
//     {
//       title: "Professional Support",
//       description: "Dedicated professional support throughout your intervention journey.",
//       icon: <FaUserTie className="service-icon" />
//     },
//     {
//       title: "Documentation",
//       description: "Assistance with all necessary documentation and regulatory compliance.",
//       icon: <FaFileAlt className="service-icon" />
//     }
//   ];

//   return (
//     <section className="services-section">
//       <div className="services-container">
//         <h2 className="section-title">Our Comprehensive Services</h2>
//         <p className="section-description">
//           PFIPC offers a wide range of specialized services designed to facilitate and support foreign interventions in Nigeria. Our comprehensive approach ensures successful partnerships and sustainable outcomes.
//         </p>

//         <div className="divider"></div>

//         <div className="services-grid">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               {service.icon}
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import React from "react";
import {
  FaHandshake,
  FaChartLine,
  FaBalanceScale,
  FaGlobe,
  FaUserTie,
  FaFileAlt
} from "react-icons/fa";
import "./ProvidedServicesSection.css";

const ServicesSection = () => {
  const services = [
    {
      title: "Partnership Facilitation",
      description:
        "We facilitate strategic partnerships between foreign interventions and local stakeholders.",
      icon: <FaHandshake />
    },
    {
      title: "Investment Advisory",
      description:
        "Expert guidance on intervention opportunities and market analysis across various sectors.",
      icon: <FaChartLine />
    },
    {
      title: "Legal Protection",
      description:
        "Comprehensive legal support and protection for foreign intervention initiatives.",
      icon: <FaBalanceScale />
    },
    {
      title: "Global Network",
      description:
        "Access to our extensive network of international partners and local experts.",
      icon: <FaGlobe />
    },
    {
      title: "Professional Support",
      description:
        "Dedicated professional support throughout your intervention journey.",
      icon: <FaUserTie />
    },
    {
      title: "Documentation",
      description:
        "Assistance with all necessary documentation and regulatory compliance.",
      icon: <FaFileAlt />
    }
  ];

  return (
    <section className="provided-services-2-section">
      <div className="services-2-container">
        <h2 className="section-title">Our Comprehensive Services</h2>
        <p className="services-2-section-description">
          PFIPC offers a wide range of specialized services designed to
          facilitate and support foreign interventions in Nigeria. Our
          comprehensive approach ensures successful partnerships and sustainable
          outcomes.
        </p>

        <div className="divider"></div>
    
        <div className="services-2-grid">
          {services.map((service, index) => (
            <div className="services-2-card" key={index}>
              <div className="services-2-icon-circle">
                {service.icon}
              </div>
              <h3 className="services-2-title">{service.title}</h3>
              <p className="services-2-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


