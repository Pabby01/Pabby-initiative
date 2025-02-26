/* eslint-disable no-unused-vars */
import React, { useRef, useEffect, useState } from "react";
import "./Contact.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [popupMessage, setPopupMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formEndpoint = "https://formspree.io/f/xkgolaze"; // Replace with your Formspree ID

    fetch(formEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          setPopupMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          setPopupMessage("❌ Failed to send message. Try again.");
        }
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000); // Hide after 3 seconds
      })
      .catch((error) => {
        setPopupMessage("❌ Error sending message. Check your connection.");
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 3000);
      });
  };

  return (
    <section className="contact hidden" ref={contactRef}>
      <h2 className="contact-title">Get in Touch</h2>

      {/* Success/Error Popup Message */}
      {showPopup && <div className="popup-message show">{popupMessage}</div>}

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>

      {/* Map beside the form */}
      <div className="contact-map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434508616!2d144.95565131568066!3d-37.81732797975162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df36df37b%3A0xf54344089b798bc9!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sbd!4v1632949488973!5m2!1sen!2sbd"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
