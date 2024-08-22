// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Deepak Pal. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/deepak-pal-390a51247/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/Deepak-pal007" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.instagram.com/p.deepak007?igsh=MXcxamw2emdqY2F4eg==" target="_blank" rel="noopener noreferrer">
            instagram
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
