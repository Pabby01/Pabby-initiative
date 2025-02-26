/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "./Hero.css"; // Ensure to style it properly

const Hero = () => {
  const navigate = useNavigate(); // Navigation hook

  return (
    <section className="hero">
      {/* Web3 Background Video */}
      <div className="video-wrapper">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src="Videos/web4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Content with Animations */}
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
      >
        Empowering Africa’s Web3 Future
      </motion.h1>

      <motion.p
        className="hero-text"
        initial={{ opacity: 0, x: -50 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 1, delay: 0.5 }}
      >
        Learn Web3, AI, and Cybersecurity. Earn NFT-based certifications. Get hired globally.
      </motion.p>

      {/* Join Waitlist Button - Redirects to Waitlist Page */}
      <motion.button 
        className="waitlist-btn"
        onClick={() => navigate("/waitlist")} // Navigate to the waitlist page
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, delay: 1 }}
      >
        Join Waitlist
      </motion.button>
    </section>
  );
};

export default Hero;
