/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./Programs.css";
import blockchainImg from "../assets/block.jpg";
import securityImg from "../assets/cyber.jpg";
import aiImg from "../assets/AI.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Programs = () => {
  const programsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      programsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: programsRef.current,
          start: "top 80%", 
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="programs hidden" ref={programsRef}>
      <h2 className="programs-title">Our Web3 Training Programs</h2>
      <div className="programs-container">
        
        {/* Blockchain Development */}
        <div className="program-box">
          <img src={blockchainImg} alt="Blockchain Development" />
          <h3>Blockchain Development</h3>
          <p>Learn Solidity & Rust for smart contracts.</p>
        </div>

        {/* Cybersecurity & Web3 Security */}
        <div className="program-box">
          <img src={securityImg} alt="Cybersecurity & Web3 Security" />
          <h3>Cybersecurity & Web3 Security</h3>
          <p>Protect blockchain applications from attacks.</p>
        </div>

        {/* AI & Machine Learning */}
        <div className="program-box">
          <img src={aiImg} alt="AI & Machine Learning" />
          <h3>AI & Machine Learning</h3>
          <p>Understand AI-driven blockchain automation.</p>
        </div>

      </div>
    </section>
  );
};

export default Programs;
