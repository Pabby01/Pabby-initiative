/* eslint-disable no-unused-vars */
import React from "react";
import "./Footer.css";
import { FaTwitter, FaLinkedin, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} PABBY Initiative. All Rights Reserved.</p>
        <p>Contact us: <a href="mailto:pabbyinitiative@gmail.com">pabbyinitiative@gmail.com</a></p>
        <p>Location: Lagos, Nigeria</p>

        {/* Social Media Icons */}
        <div className="footer-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer">
            <FaTelegram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
