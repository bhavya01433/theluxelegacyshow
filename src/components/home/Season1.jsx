import { useEffect, useRef } from "react";
import season1Data from "../../data/season1Data"; // <-- updated import
import "./Season1.css";

const Season1 = () => {
  const scrollContainerRef = useRef(null);
  const autoScrollActive = useRef(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId;
    const speed = 4;

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
        {/* Mobile: video background */}
        <video
          className="season1-bg-video"
          autoPlay
          loop
          muted
          playsInline
          poster="images/try.JPG"
        >
          <source src="/site3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Desktop: image background */}
        <img
          src="images/try.JPG"
          alt="Fashion Show Season 1"
          className="season1-bg-img"
        />

        {/* Overlay Content (scrolls over static bg) */}
        <div className="season1-image-overlay">
          <h1 className="season1-title">SEASON 1</h1>
          {/* <div className="season1-content">
            <h2> The Dawn of Luxe Legacy</h2>
            <p>
              Step into the debut season—where fashion’s visionaries unveil
              dramatic silhouettes, opulent textures, and avant-garde artistry.
              Experience the spectacle, the energy, and the timeless elegance
              that sets the Luxe Legacy apart.
            </p>
          </div> */}
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
      </div>
      {/* <div className="season1-content">
        <h2>Season 1: The Dawn of Luxe Legacy</h2>
        <p>
          Step into the debut season—where fashion’s visionaries unveil dramatic
          silhouettes, opulent textures, and avant-garde artistry. Experience
          the spectacle, the energy, and the timeless elegance that sets the
          Luxe Legacy apart.
        </p>
        <div className="season1-details">
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
