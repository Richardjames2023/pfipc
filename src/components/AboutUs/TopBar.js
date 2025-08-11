import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="topbar">
      <ScrollLink
        to="fullAboutUs"
        smooth={true}
        duration={500}
        offset={-100}
        className="topbar-link"
        activeClass="active"
      >
        OUR HISTORY
      </ScrollLink>
      <ScrollLink
        to="governingCouncil"
        smooth={true}
        duration={500}
        offset={-100}
        className="topbar-link"
        activeClass="active"
      >
        GOVERNING COUNCIL
      </ScrollLink>
      <ScrollLink
        to="managementTeam"
        smooth={true}
        duration={500}
        offset={-100}
        className="topbar-link"
        activeClass="active"
      >
        MANAGEMENT TEAM
      </ScrollLink>
    </div>
  );
};

export default TopBar;
