import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import "./portfolioDetailed.css";

const PortfolioDetail = () => {
  const { slug } = useParams();
  const project = portfolioData.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!project) {
    return <div className="not-found">Project not found 😞</div>;
  }

  return (
    <div className="portfolio-detailed-container">
      {/* Hero Section */}
      <section className="portfolio-hero">
        <img
          src={`/${project.img}`}
          alt={project.title}
          className="portfolio-hero-image"
        />
        <div className="portfolio-hero-overlay">
          <h1 className="portfolio-title">{project.title}</h1>
          <p className="portfolio-subtitle">{project.type}</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="zigzag-section">
        <div className="zigzag-row">
          <div className="zigzag-text">
            <h2>Project Overview</h2>
            <p>{project.description}</p>
          </div>
          {project.overviewImg && (
            <div className="zigzag-image">
              <img
                src={`/${project.overviewImg}`}
                alt={`${project.title} Overview`}
                className="image"
              />
            </div>
          )}
        </div>
      </section>

      {/* Highlights Section */}
      {project.highlights && (
        <section className="zigzag-section">
          <div className="zigzag-row reverse">
            <div className="zigzag-text">
              <h2>Highlights</h2>
              <ul>
                {project.highlights.map((item, index) => (
                  <li key={index}>
                    <strong>{item.title}:</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </div>
            {project.highlightImg && (
              <div className="zigzag-image">
                <img
                  src={`/${project.highlightImg}`}
                  alt={`${project.title} Highlights`}
                  className="image"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="zigzag-section">
          <div className="zigzag-row">
            <div className="zigzag-text">
              <h2>Client Testimonial</h2>
              <p>{project.testimonial.quote}</p>
              <p>
                — <em>{project.testimonial.author}</em>
              </p>
            </div>
            {project.testimonial.img && (
              <div className="zigzag-image">
                <img
                  src={`/${project.testimonial.img}`}
                  alt="Client Testimonial"
                  className="image"
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      {project.cta && (
        <section className=" cta-section">
          <h2>{project.cta.title}</h2>
          <p>{project.cta.text}</p>
          <Link to="/" className="btn">
            ← Back to Home
          </Link>
        </section>
      )}
    </div>
  );
};

export default PortfolioDetail;
