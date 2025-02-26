/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "/pabby-logo.jpg";
import "./Header.css"; // Import the updated styles

const Header = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Logo - Clicking it navigates back to home */}
      <motion.img
        src={logo}
        alt="PABBY Logo"
        className="logo"
        onClick={() => navigate("/")} // Navigate to home page
        whileHover={{ scale: 1.1, rotate: 10 }}
      />

      {/* Navigation */}
      <nav>
        <ul>
          <motion.li whileHover={{ scale: 1.1, color: "#ff9900" }}>
            <a onClick={() => navigate("/")}>Home</a> {/* Navigate to Home */}
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#ff9900" }}>
            <a onClick={() => scrollToSection("about")}>About</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#ff9900" }}>
            <a onClick={() => scrollToSection("programs")}>Programs</a>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1, color: "#ff9900" }}>
            <a onClick={() => scrollToSection("contact")}>Contact</a>
          </motion.li>
        </ul>
      </nav>

      {/* Join Waitlist Button - Navigates to Waitlist Page */}
      <motion.button
        className="waitlist-btn"
        onClick={() => navigate("/waitlist")} // Corrected navigation to waitlist
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        Join Waitlist
      </motion.button>
    </motion.header>
  );
};

export default Header;
