import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./portfolioDetailed.css";

const MasterpieceDetail = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src="/images/farm.jpg"
          alt="Verdant Acres Farm Project"
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">Verdant Acres Farm Project</h1>
          <p className="portfolio-subtitle">
            Cultivating Sustainability, One Acre at a Time
          </p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>
              Verdant Acres isn’t just a farm—it’s a future-forward ecosystem of
              sustainable agriculture. Designed with circular farming
              principles, rainwater harvesting systems, and solar-powered
              infrastructure, this project redefines how modern farms operate.
              Built for both efficiency and ecological harmony, it offers a
              blueprint for green farming that respects the land and empowers
              local communities.
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/farm1.jpg"
              alt="Verdant Acres Overview"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="zigzag-section">
        <div className="zigzag-row reverse">
          <div className="zigzag-text">
            <h2>Project Highlights</h2>
            <ul>
              <li>
                <strong>Off-Grid Energy:</strong> 100% solar-powered operations
                with backup wind turbines for round-the-clock sustainability.
              </li>
              <li>
                <strong>Rainwater Harvesting:</strong> Innovative water
                management system covering irrigation and domestic needs.
              </li>
              <li>
                <strong>Soil-First Design:</strong> Permaculture layout to
                maximize yield and preserve soil health naturally.
              </li>
              <li>
                <strong>Farm-to-Community Model:</strong> Direct distribution to
                nearby towns, boosting local food security and reducing carbon
                miles.
              </li>
            </ul>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/farm2.jpg"
              alt="Farm Project Highlights"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Client Testimonial</h2>
            <p>
              “Working with Construct Edge on Verdant Acres was a revelation. It
              wasn’t just about constructing a farm—it was about nurturing a
              living, breathing landscape that serves both nature and people.”
            </p>
            <p>
              From site analysis to smart irrigation systems, their approach was
              both deeply technical and beautifully human. Every barn,
              greenhouse, and path was crafted with purpose and precision.{" "}
              <br /> — <em>GreenHarvest Co.</em>
            </p>
          </div>
          <div className="zigzag-image">
            <img
              src="/images/client.jpeg"
              alt="Client Testimonial"
              className="image"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Inspired to Grow Something Meaningful?</h2>
        <p>Let’s build your vision into a thriving, sustainable reality.</p>
        <Link to="/" className="btn">
          ← Back to Home
        </Link>
      </section>
    </div>
  );
};

export default MasterpieceDetail;
