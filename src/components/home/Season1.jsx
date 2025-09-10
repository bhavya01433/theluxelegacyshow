import { useEffect, useRef, useState } from "react";
import season1Data from "../../data/season1Data";
import "./Season1.css";

const Season1 = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollActive = useRef(true);
  const parallaxRef = useRef(null);
  const [parallaxY, setParallaxY] = useState(0);
  const scrollByAmount = (direction = 1) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const amount = Math.max(320, Math.floor(container.offsetWidth * 0.7));
    container.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    let scrollAmount = 0;
    const speed = 1;

    // Infinite auto-scroll logic
    const scrollStep = () => {
      if (!autoScrollActive.current) {
        animationId = requestAnimationFrame(scrollStep);
        return;
      }
      // When reaching the end, seamlessly reset to the start
      if (
        container.scrollLeft >=
        container.scrollWidth - container.offsetWidth
      ) {
        container.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        container.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(scrollStep);
    };
    animationId = requestAnimationFrame(scrollStep);

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

  // Subtle parallax effect for Season1 content overlay
  useEffect(() => {
    const handleScroll = () => {
      const section = parallaxRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;
      // Calculate progress while the section is within the viewport
      const visibleTop = Math.max(0, viewportHeight - rect.top);
      const progress = Math.min(
        1,
        Math.max(0, visibleTop / (viewportHeight * 1.2))
      );
      // Move content slightly slower than scroll for cinematic depth
      const translateY = Math.round(progress * 16); // up to ~16px
      setParallaxY(translateY);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // For best seamless loop, duplicate data at least 4x
  const duplicatedData = [
    ...season1Data,
    ...season1Data,
    ...season1Data,
    ...season1Data,
  ];

  return (
    <section className="season1-section">
      <div className="season1-bg-holder">
        {/* Overlay Content over hero background */}
        <div
          className="season1-image-overlay"
          ref={parallaxRef}
          style={{ transform: `translateY(${parallaxY}px)` }}
        >
          <h1 className="season1-title">SEASON 1</h1>
          <div className="season1-content">
            <h2> The Dawn of Luxe Legacy</h2>
            <p>
              Step into the debut season—where fashion’s visionaries unveil
              dramatic silhouettes, opulent textures, and avant-garde artistry.
              Experience the spectacle, the energy, and the timeless elegance
              that sets the Luxe Legacy apart.
            </p>
          </div>
          <div className="season1-autoscroll">
            <div
              ref={scrollContainerRef}
              className="horizontal-scroll-container"
            >
              {duplicatedData.map((project, index) => (
                <div className="scroll-card" key={index}>
                  <img src={project.img} alt={project.title} />
                </div>
              ))}
            </div>
          </div>
          <div className="tag-grid">
            <div className="tag">
              <span>450+ Gathering</span>
            </div>
            <div className="tag">
              <span>Benecci</span>
            </div>
            <div className="tag">
              <span>Luxury</span>
            </div>
            <div className="tag">
              <span>Linetribe</span>
            </div>
          </div>
        </div>
        {/* Navigation Arrows */}
        <button
          type="button"
          className="carousel-arrow left"
          onMouseEnter={() => (autoScrollActive.current = false)}
          onMouseLeave={() => (autoScrollActive.current = true)}
          onClick={() => scrollByAmount(-1)}
          aria-label="Scroll left"
        >
          ‹
        </button>
        <button
          type="button"
          className="carousel-arrow right"
          onMouseEnter={() => (autoScrollActive.current = false)}
          onMouseLeave={() => (autoScrollActive.current = true)}
          onClick={() => scrollByAmount(1)}
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>

      {/*}  <div className="season1-details">
          <div className="season1-card">
            <span className="season1-label">Date</span>
            <span className="season1-value">October 10, 2025</span>
          </div>
          <div className="season1-card">
            <span className="season1-label">Venue</span>
            <span className="season1-value">Grand Fashion Hall, Mumbai</span>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Season1;
