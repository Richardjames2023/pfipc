import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';
import './NewNavbar.css';

const NewNavbar = () => {
  const [language, setLanguage] = useState('English');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  // Close menu if clicking outside the nav links
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('menu-overlay')) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="new_navbar">
      <div className="new_navbar_container">

        {/* Logo + Hamburger */}
        <div className="new_navbar_header-top-left">
          <div className="logo-section">
            <img src="./images/logo.png" alt="The Presidency Logo" className="logo" />
          </div>
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

              {/* Desktop nav menu */}
              <nav className="desktop-nav">
            <ul className="new_nav_links">
              <li className={`new_nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/">Home</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about">About Us</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/investment-opportunities' ? 'active' : ''}`}>
                <Link to="/investment-opportunities">Investment Opportunities</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link to="/services">Our Services</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/news' ? 'active' : ''}`}>
                <Link to="/news">News and Resources</Link>
              </li>
            </ul>
          </nav>
        </div>


        {/* Nav Links - Mobile/Tablet Overlay */}
        {menuOpen && (
          <div className="menu-overlay" onClick={handleOverlayClick}>
            <ul className="new_nav_links open">
              <li className={`new_nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
                <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/investment-opportunities' ? 'active' : ''}`}>
                <Link to="/investment-opportunities" onClick={() => setMenuOpen(false)}>Investment Opportunities</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
                <Link to="/services" onClick={() => setMenuOpen(false)}>Our Services</Link>
              </li>
              <li className={`new_nav-link ${location.pathname === '/news' ? 'active' : ''}`}>
                <Link to="/news" onClick={() => setMenuOpen(false)}>News and Resources</Link>
              </li>
              {/* Contact Us (mobile/tablet only) */}
              <li className="mobile-contact">
                <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
              </li>
            </ul>
          </div>
        )}

        {/* Right Side (Desktop only) */}
        <div className="header-top-right_navbar">
          <Link to="/contact" className="headrr_top-right_contact-button">Contact Us</Link>
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
        </div>
      </div>
    </div>
  );
};

export default NewNavbar;




