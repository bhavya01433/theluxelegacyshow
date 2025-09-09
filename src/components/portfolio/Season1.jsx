import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import portfolioData from "../../data/portfolioData";
import "./season1.css";

const Season1 = () => {
  const imageSectionRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [imageSticky, setImageSticky] = useState(true);

  // Auto-scroll logic
  const autoScrollActive = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      // When the tag grid reaches the top, unstick the image
      if (!imageSectionRef.current) return;
      const rect = imageSectionRef.current.getBoundingClientRect();
      setImageSticky(rect.top <= -100); // Unstick after scrolling past section
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    const speed = 1.1;
    const scrollStep = () => {
      if (!autoScrollActive.current) {
        animationId = requestAnimationFrame(scrollStep);
        return;
      }
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);

    // Pause on user interaction
    const pauseScroll = () => {
      autoScrollActive.current = false;
    };
    const resumeScroll = () => {
      autoScrollActive.current = true;
    };

    container.addEventListener("mouseenter", pauseScroll);
    container.addEventListener("touchstart", pauseScroll);
    container.addEventListener("mouseleave", resumeScroll);
    container.addEventListener("touchend", resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      container.removeEventListener("mouseenter", pauseScroll);
      container.removeEventListener("touchstart", pauseScroll);
      container.removeEventListener("mouseleave", resumeScroll);
      container.removeEventListener("touchend", resumeScroll);
    };
  }, []);

  const duplicatedData = [...portfolioData, ...portfolioData, ...portfolioData];

  return (
    <div className="season1-section">
      <div
        className={`season1-image-section ${imageSticky ? "sticky" : ""}`}
        ref={imageSectionRef}
      >
        <img src="/images/farm.jpg" alt="Farm" className="season1-hero-image" />
        <div className="season1-image-overlay">
          <h1 className="season1-title">SEASON 1</h1>
          <div className="season1-autoscroll">
            <div
              ref={scrollContainerRef}
              className="horizontal-scroll-container"
            >
              {duplicatedData.map((project, index) => (
                <div className="scroll-card" key={index}>
                  <img src={project.img} alt={project.title} />
                  <div className="card-overlay">
                    <h4>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tag-grid">
            <div className="tag">
              🏡 <span>4,500 sq ft</span>
            </div>
            <div className="tag">
              🌿 <span>Sustainable</span>
            </div>
            <div className="tag">
              ✨ <span>Smart tech</span>
            </div>
            <div className="tag">
              🪵 <span>Premium finish</span>
            </div>
          </div>
        </div>
      </div>
      {/* After scroll, the hero image is out of view, rest content appears */}
      <div className="season1-content">
        <h2 className="project-title">Farmhouse Project</h2>
        <p className="project-desc">
          A modern farmhouse where elegance meets sustainability. Crafted for
          timeless comfort and contemporary living.
        </p>
        <Link to="portfolio/Season1Detail" className="btn featured-btn">
          View Full Project Details
          <span className="arrow">→</span>
        </Link>
      </div>
      {/* Portfolio Section (can add more content here) */}
      {/* <section className="portfolio-section">
        <h2 className="portfolio-heading">Portfolio</h2>
        <p className="portfolio-desc"></p>
      </section> */}
    </div>
  );
};

export default Season1;
