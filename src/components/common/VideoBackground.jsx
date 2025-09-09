import "./VideoBackground.css";

const VideoBackground = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="video-container">
      {/* Video for mobile/tablet */}
      <video autoPlay loop muted playsInline className="video-bg">
        <source src="/site3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Image for desktop */}
      <img
        src="/images/try.jpg"
        alt="Fashion Show Hero"
        className="hero-bg-img"
      />
      <div className="video-overlay">
        <div className="overlay-content">
          <h1>The Luxe Legacy Show</h1>
          {/* ...other content... */}
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
