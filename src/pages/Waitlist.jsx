/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./Waitlist.css";
import Footer from "../components/Footer";

const Waitlist = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: "",
    reason: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send form data to Formspree
    const response = await fetch("https://formspree.io/f/xkgolaze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
      console.log("Form submitted:", formData);
    } else {
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <section className="waitlist-container">
        <div className="waitlist-box">
          <h2 className="waitlist-title">Join the PABBY Initiative Waitlist</h2>
          {submitted ? (
            <p className="success-message">
              🎉 Thank you for joining the waitlist! We’ll reach out soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
              />
              <textarea
                name="suggestion"
                placeholder="What would you like to see on PABBY?"
                required
                onChange={handleChange}
              ></textarea>
              <textarea
                name="reason"
                placeholder="Why did you choose PABBY over others?"
                required
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Waitlist;
