import React from 'react';
import './CopyRight.css';

const CopyRight = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="copyright">
      <div className="footer-links">
        <a href="/terms" className="footer-link">Terms and conditions</a>
        <a href="/privacy" className="footer-link">Privacy policy</a>
      </div>
      <div className="footer-text">
        © {currentYear} Presidential Foreign Investment Promotion Council (PFIPC)
      </div>
    </footer>
  );
};

export default CopyRight;
