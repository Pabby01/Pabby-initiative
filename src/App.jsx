/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Waitlist from "./pages/Waitlist"; // Import the Waitlist page
import "./styles.css";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Programs />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/waitlist" element={<Waitlist />} /> {/* New Waitlist Route */}
        </Routes>
      </>
    </Router>
  );
}

export default App;
