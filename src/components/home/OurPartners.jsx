import React, { useEffect, useRef } from "react";
import partnerLogos from "../../data/partnerLogos"; // Array of logo URLs
import "./OurPartners.css";

const OurPartners = () => {
  const trackRef = useRef(null);
  const autoScrollActive = useRef(true);

  // Duplicate logos for smooth infinite scroll
  const displayedLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId;
    const speed = 0.8;

    // Infinite auto-scroll logic
    const scrollStep = () => {
      if (!autoScrollActive.current) {
        animationId = requestAnimationFrame(scrollStep);
        return;
      }
      if (track.scrollLeft >= track.scrollWidth - track.offsetWidth) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += speed;
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

    track.addEventListener("mouseenter", pauseScroll);
    track.addEventListener("touchstart", pauseScroll);
    track.addEventListener("mouseleave", resumeScroll);
    track.addEventListener("touchend", resumeScroll);

    return () => {
      cancelAnimationFrame(animationId);
      track.removeEventListener("mouseenter", pauseScroll);
      track.removeEventListener("touchstart", pauseScroll);
      track.removeEventListener("mouseleave", resumeScroll);
      track.removeEventListener("touchend", resumeScroll);
    };
  }, []);

  // Intersection Observer for fade-in title
  useEffect(() => {
    const titleEl = document.querySelector(".partners-title");
    if (!titleEl) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleEl.classList.add("in-view");
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(titleEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="partners-section">
      <h2 className="partners-title">OUR PARTNERS</h2>
      <div className="partners-logos-track" ref={trackRef}>
        {displayedLogos.map((logo, idx) => (
          <div className="partner-logo-card" key={idx}>
            <img
              src={logo}
              alt={`Partner Logo ${idx + 1}`}
              className="partner-logo-img"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
