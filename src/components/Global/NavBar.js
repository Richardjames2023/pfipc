import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaArrowUp } from 'react-icons/fa';
import './NavBar.css';

const NavBar = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showScrollUp, setShowScrollUp] = useState(false);
  const location = useLocation();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
    // Add logic here to change site's language if using a localization library
  };

  // Show scroll-up arrow when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 300); // Show arrow after 300px scroll
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">About Us</Link>
          </li>
          <li className={`nav-link ${location.pathname === '/investment-opportunities' ? 'active' : ''}`}>
            <Link to="/investment-opportunities">Investment Opportunities</Link>
          </li>
          <li className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            <Link to="/services">Our Services</Link>
          </li>
          <li className={`nav-link ${location.pathname === '/news' ? 'active' : ''}`}>
            <Link to="/news">News and Resources</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <div
            className="language-selector"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <FaGlobe className="globe-icon" />
            <span>{language}</span>
            {dropdownOpen && (
              <div className="dropdown">
                <div onClick={() => handleLanguageChange('English')}>English</div>
                <div onClick={() => handleLanguageChange('French')}>French</div>
                <div onClick={() => handleLanguageChange('Spanish')}>Spanish</div>
                <div onClick={() => handleLanguageChange('Arabic')}>Arabic</div>
                <div onClick={() => handleLanguageChange('Chinese')}>Chinese</div>
              </div>
            )}
          </div>
          <Link to="/contact" className="contact-button">Contact Us</Link>
        </div>
      </nav>

      {/* Scroll-Up Arrow */}
      {showScrollUp && (
        <button className="scroll-up-button" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default NavBar;
