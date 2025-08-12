import React from 'react';
import LatestPosts from '../components/HomePage/LatestPosts';
import InvestmentOpportunities from '../components/HomePage/InvestmentOpportunities';
import Carousel from '../components/Global/Carousel';
import coinPlant from "../assets/pfipc.jpg";
import row from "../assets/pficp2.jpeg";
// import ServicesCarousel from '../components/ServicesCarousel';
import ServicesSection from '../components/ServicesSection';
import ClientLogos from '../components/ClientLogos';
import BottomContentGrid from '../components/BottomContentGrid';
import WhyInvest from '../components/HomePage/WhyInvest';





function HomePage(){
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
    <div>
      <Carousel slides={slides} />
      {/* <ServicesCarousel/> */}
      <WhyInvest/>
      <ServicesSection/>
      <InvestmentOpportunities />
      <LatestPosts />
      <BottomContentGrid/>
      <ClientLogos/>

    </div>
)
};
export default HomePage;