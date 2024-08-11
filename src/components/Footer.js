import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Nishit Saha. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=100007266315713" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/nishitsaha/?hl=en" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:nishitsaha61@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
