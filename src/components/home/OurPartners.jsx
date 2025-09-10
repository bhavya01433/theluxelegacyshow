import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import partnerLogos from "../../data/partnerLogos";
import "./OurPartners.css";

const OurPartners = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const trackRef = useRef(null);

  const displayedLogos = [...partnerLogos, ...partnerLogos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) return; 

    let animationId;
    const speed = 0.8;

    const scrollStep = () => {
      if (track.scrollLeft >= track.scrollWidth - track.offsetWidth) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += speed;
      }
      animationId = requestAnimationFrame(scrollStep);
    };

    animationId = requestAnimationFrame(scrollStep);

    // Pause on hover or touch (optional nice touch)
    const pauseScroll = () => cancelAnimationFrame(animationId);
    const resumeScroll = () => animationId = requestAnimationFrame(scrollStep);

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

  return (
    <section className="partners-section">
      <h2 ref={titleRef} className={`partners-title ${titleInView ? "in-view" : ""}`}>
        OUR PARTNERS
      </h2>

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
