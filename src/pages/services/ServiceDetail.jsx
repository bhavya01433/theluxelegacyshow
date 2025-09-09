import { useEffect } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useParams, useNavigate } from "react-router-dom";
import servicesData from "../../data/servicesData";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!service) return <p>Service not found 🤷</p>;

  return (
    <section className="service-detail-wrapper">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img
          src={service.bannerImg}
          alt={service.title}
          className="banner-img"
        />
        <div className="banner-overlay">
          <h1>{service.title}</h1>
          <p>{service.description}</p>
        </div>
      </div>

      <div className="service-detail-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back to Services
        </button>

        {/* Intro */}
        <section className="intro-section">
          <h2>{service.introHeading}</h2>
          {service.introContent.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </section>

        {/* Offerings */}
        <section className="offerings-section">
          <h2>What We Offer</h2>
          <div className="offering-grid">
            {service.offerings.map((item, i) => (
              <div className="offering-card" key={i}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="gallery-section">
          <h2>Visualize the Possibilities</h2>
          <div className="gallery-grid">
            {service.gallery.map((item, i) => (
              <div className="gallery-item" key={i}>
                <img src={item.img} alt={`Gallery ${i + 1}`} />
                <p className="image-caption">{item.caption}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        {service.cta && (
          <section
            className="cta-section"
            style={{ backgroundImage: `url('${service.cta.backgroundImage}')` }}
          >
            <h2>{service.cta.heading}</h2>
            <p>{service.cta.subtext}</p>
            <Link to="/contact">
              <button className="btn">{service.cta.buttonText}</button>
            </Link>
          </section>
        )}
      </div>
    </section>
  );
};

export default ServiceDetail;
