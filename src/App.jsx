/* eslint-disable no-unused-vars */
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Contact from "./components/contact";
import "./styles.css";  // Import external CSS

function App() {
  return (
    <div>
      <Hero />
      <About />
      <Programs />
      <Contact />
    </div>
  );
}

export default App;
