import React from 'react';
import './Footer.css'; // Create a CSS file for styling

export default function Footer (){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h4>Your Name</h4>
          <p>© {new Date().getFullYear()} | All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};


