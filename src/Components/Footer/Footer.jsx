import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="icon" />
        </a>
        <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="mailto:youremail@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
        </a>
      </div>
      <p className="copyright">Copyright © 2025. Maczo</p>
    </footer>
  );
};

export default Footer;