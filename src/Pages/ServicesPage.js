import React from 'react';
import ProvidedServicesSection from "../components/ProvidedServicesSection"
import Carousel from '../components/Global/Carousel';
import coinPlant from "../assets/pfipc.jpg";
import row from "../assets/pficp2.jpeg";


function ServicePage(){
    const slides = [
        {
          background: coinPlant,
          content: (
            <div className="carousel-left">
              <h1>What We Offers</h1>
              <p>
                Presidential Foreign Investment Promotion Council (PFIPC) is
                dedicated to promoting, facilitating, and developing foreign
                investments in Nigeria.
              </p>
              <button>Speak to an expert</button>
            </div>
          ),
        },
        {
          background: row,
          content: (
            <div className="carousel-left">
              <h1>Our Services</h1>
              <p>
                Presidential Foreign Investment Promotion Council (PFIPC) is
                dedicated to promoting, facilitating, and developing foreign
                investments in Nigeria.
              </p>
              <button>Speak to an expert</button>
            </div>
          ),
        },
        // Add more slides here if needed
      ];
return (
    <div>
         <Carousel slides={slides} />
        {/* <ServiceList /> */}
        <ProvidedServicesSection/>
    </div>
)
};
export default ServicePage;