import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let scrollAmount = 0;
    const speed = 1;
    const autoScroll = () => {
      container.scrollLeft += speed;
      scrollAmount += speed;

      if (scrollAmount >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      }

      requestAnimationFrame(autoScroll);
    };

    let animationId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const duplicatedData = [...portfolioData, ...portfolioData];

  return (
    <section className="portfolio-section">
      <h3 className="portfolio-heading">Portfolio</h3>
      <p className="portfolio-desc">
        A showcase of purposeful design and expert craftsmanship. <br />
        Where vision becomes structure — and ideas become icons.
      </p>
      <div ref={scrollContainerRef} className="horizontal-scroll-container">
        {duplicatedData.map((project, index) => (
          <div className="scroll-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-overlay">
              <h4>{project.title}</h4>
              <p>{project.type}</p>
              <Link to={`/portfolio/${project.slug}`}>
                <button className="btn view-btn">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <p className="swipe-indicator">← Swipe to explore →</p>
    </section>
  );
};

export default Portfolio;
