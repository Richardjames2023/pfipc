import React from 'react';
import Carousel from '../components/Global/Carousel';
import coinPlant from "../assets/pfipc.jpg";
import row from "../assets/pficp2.jpeg";
import KeyAdvantages from '../components/HomePage/KeyAdvantages';
import GoverningCouncil from '../components/GoverningCouncil';
import ServicesCarousel from '../components/ServicesCarousel';


function aboutUs(){
  const slides = [
    {
      background: coinPlant,
      content: (
        <div className="carousel-left">
          <h1>Your Gateway to Investment Opportunities in Nigeria</h1>
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
          <h1>Understand the Investment Opportunities Available in Nigeria</h1>
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
    <>
      <Carousel slides={slides} />
      <KeyAdvantages />
      <GoverningCouncil/>
      <ServicesCarousel/>
    </>
)
};
export default aboutUs;