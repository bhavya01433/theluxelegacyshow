import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email");
      return;
    }
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
    setEmailError("");
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo-section">
            <img
              src="/legacylogo.svg"
              alt="Company Logo"
              className="footer-logo"
            />
            <p className="company-description">
              Building excellence through innovation and dedication.
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <nav className="footer-nav">
            <ul>
              <li>
                <Link to="/#about">About us</Link>
              </li>
              <li>
                <Link to="/#services">Season 1</Link>
              </li>
              <li>
                <Link to="/#portfolio">Team</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <div className="contact-info">
            <p>
              <FaEnvelope />{" "}
              <a href="mailto:hello@theluxelegacyshow.com">
                hello@theluxelegacyshow.com
              </a>
            </p>
            <p>
              <FaPhone /> <a href="tel:+919257526846">+91 9257526846</a>
            </p>
            <p>
              <FaMapMarkerAlt /> Jaipur, Rajasthan, India
            </p>
          </div>
        </div>

        <div className="footer-section">
          <h3>Newsletter</h3>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <div className="input-group">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                placeholder="Enter your email"
                aria-label="Email for newsletter"
              />
              <button type="submit">Subscribe</button>
            </div>
            {emailError && <span className="error-message">{emailError}</span>}
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
        <div className="footer-legal">
          <p>
            &copy; {new Date().getFullYear()} The Luxe Legacy Show. All Rights
            Reserved.
          </p>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
