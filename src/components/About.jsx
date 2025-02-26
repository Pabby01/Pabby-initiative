/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./About.css";
import aboutImg from "../assets/pab.jpg"; // Replace with an actual image
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%", 
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section className="about hidden" ref={aboutRef}>
      {/* Left Side - Text */}
      <div className="about-text">
        <h2 className="about-title">What is PABBY Initiative?</h2>
        <p>
          PABBY Initiative is a Web3 education platform that equips young
          professionals with blockchain, AI, and cybersecurity skills while
          providing NFT-based verifiable certifications.
        </p>
        <p>
          Our mission is to bridge the gap between traditional education and
          cutting-edge technology by offering practical, hands-on training and
          mentorship to students and early professionals. We are building a
          future where young innovators can harness Web3 technology for global
          opportunities.
        </p>
      </div>

      {/* Right Side - Image */}
      <img src={aboutImg} alt="About PABBY" className="about-image" />
    </section>
  );
};

export default About;
