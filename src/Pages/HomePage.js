import React from 'react';
import WhyInvest from '../components/HomePage/WhyInvest';
import KeyAdvantages from '../components/HomePage/KeyAdvantages';
import AboutUs from '../components/HomePage/AboutUs';
import LegalFramework from '../components/HomePage/LegalFframework';
// import Banner from '../components/HomePage/Banner';
import OurServices from '../components/HomePage/OurServices';
import LatestPosts from '../components/HomePage/LatestPosts';
import Testimonials from '../components/HomePage/Testimonials';
import InvestmentOpportunities from '../components/HomePage/InvestmentOpportunities';
import Carousel from '../components/Global/Carousel';
import coinPlant from "../assets/pfipc.jpg";
import row from "../assets/pficp2.jpeg";
import ServicesCarousel from '../components/ServicesCarousel';
import CombinedSection from "../components/CombinedSection"
import JoinOurTeam from '../components/JoinOurTeam';
import ServicesSection from '../components/ServicesSection';
import AccessibleHero from '../components/AccessibleHero';
import YellowBanner from '../components/YellowBanner';
import Service_yellow from "../components/Service_yellow"
import ClientLogos from '../components/ClientLogos';
import BottomContentGrid from '../components/BottomContentGrid';





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
      <ServicesCarousel/>
      {/* <Banner /> */}
      <WhyInvest />
      {/* <Service_yellow/> */}
      <ServicesSection/>
      {/* <KeyAdvantages />
      <JoinOurTeam/> */}
      <InvestmentOpportunities />
      <LatestPosts />
      <BottomContentGrid/>
      <ClientLogos/>
      {/* <AboutUs />
      <LegalFramework /> */}
      {/* <CombinedSection/> */}
      {/* <OurServices /> */}
      {/* <Testimonials /> */}

    </div>
)
};
export default HomePage;