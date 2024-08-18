// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Deepak Pal. All Rights Reserved.</p>
        <div className="footer-social-links">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com/your-username" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
