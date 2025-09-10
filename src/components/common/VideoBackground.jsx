import "./VideoBackground.css";

const VideoBackground = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="video-container">
        {/* Video for mobile/tablet */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-bg"
        >
          <source src="/legacyy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Image for desktop */}
        <img
          src="/images/try.webp"
          alt="Fashion Show Hero"
          className="hero-bg-img"
        />
      </div>
      {/* Floating overlay that scrolls with page, not sticky */}
      <div className="hero-floating-overlay">
        <div className="overlay-content">
          <h1>The Luxe Legacy Show</h1>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;
