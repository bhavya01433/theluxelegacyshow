import { Link } from "react-router-dom";
import "./ContactTeaser.css";

const ContactTeaser = () => {
  return (
    <section className="contact-teaser">
      <video autoPlay muted loop className="contact-teaser-video">
        <source src="/contact-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="contact-teaser-overlay">
        <h2>Ready to Make It Real?</h2>
        <p>Ideas are cheap. Execution builds empires. Let’s get to work.</p>

        <Link to="/contact" className="btn">
          Get in Touch →
        </Link>
      </div>
    </section>
  );
};

export default ContactTeaser;
