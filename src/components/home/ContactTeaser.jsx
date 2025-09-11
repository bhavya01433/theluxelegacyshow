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
        <h2>Are You Ready for Season 2?</h2>
        <p>
          The next chapter of avant-garde elegance. Experience the future of
          fashion, live on the runway.
        </p>

        <Link to="/" className="btn">
          Book Now →
        </Link>
      </div>
    </section>
  );
};

export default ContactTeaser;
