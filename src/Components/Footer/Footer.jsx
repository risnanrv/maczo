import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importing icons from React Icons
import './Footer.css'; // Create this CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className="icon" /> {/* Using React Icons */}
        </a>
        <a href="https://www.instagram.com/yourinstagram" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" /> {/* Using React Icons */}
        </a>
        <a href="mailto:youremail@gmail.com">
          <FaEnvelope className="icon" /> {/* Using React Icons */}
        </a>
      </div>
      <p className="copyright">Copyright © 2025. Maczo</p>
    </footer>
  );
};

export default Footer;
