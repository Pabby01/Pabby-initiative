/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import logo from "/pabby-logo.jpg";
import "./Header.css"; // Import updated styles

const Header = () => {
  const navigate = useNavigate(); // Initialize navigation
  const [menuOpen, setMenuOpen] = useState(false); // Track menu state

  // Toggle Mobile Menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = (e) => {
      if (!document.querySelector(".hamburger").contains(e.target) && !document.querySelector("nav").contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("click", closeMenu);
    } else {
      document.removeEventListener("click", closeMenu);
    }

    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Close menu after clicking
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

      {/* Hamburger Menu for Mobile (Shifted to Right) */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className={menuOpen ? "show" : ""}>
          <motion.li whileHover={{ scale: 1.1, color: "#ff9900" }}>
            <a onClick={() => navigate("/")}>Home</a>
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
          <li>
            <motion.button
              className="waitlist-btn"
              onClick={() => navigate("/waitlist")}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Join Waitlist
            </motion.button>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
