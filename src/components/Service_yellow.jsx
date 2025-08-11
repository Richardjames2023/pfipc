import React from "react";
import HeroGovernment from "./AccessibleHero"; // Section 2
import YellowBanner from "./YellowBanner"; // Section 3
import "./Service_yellow.css";

const MainLanding = () => {
  return (
    <div className="main-landing">
      <HeroGovernment />
      <YellowBanner />
    </div>
  );
};

export default MainLanding;
