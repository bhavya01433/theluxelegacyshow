import { useEffect, useRef } from "react";
import "./FounderSection.css";

const founderStory = `
  Kshitij Mathur, Founder and Creative Director of The Luxe Legacy Show, is a 21-year-old visionary whose journey blends literature, medicine, and entrepreneurship into a unique narrative of passion and purpose. Born in Sawai Madhopur, Rajasthan, he was deeply inspired by his mother, a Hindi and Sanskrit teacher, who instilled in him a love for learning, language, and storytelling from an early age. By 2020, Kshitij authored his first heartfelt novel exploring the meaning of friendship and human connection.

  Beyond writing, Kshitij discovered his true calling in podcasting, where his engaging conversations with India’s most respected thought leaders—Swami Ramdev, Swami Chidanand Saraswati, Bhagwati Saraswati, and Sadhvi Ritambhara—elevated his platform into a hub for culture, spirituality, and thought leadership. His ability to engage diverse and influential personalities has made The Luxe Legacy Show a unique space for inspiring narratives and meaningful dialogue.
`;

const founderImage = "images/founder.jpg";

const FounderSection = () => {
  const textBlockRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Fade/slide-in for text
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          textBlockRef.current.classList.add("in-view");
        }
      },
      { threshold: 0.3 }
    );
    if (textBlockRef.current) observer.observe(textBlockRef.current);

    // Cinematic image entrance
    const imgObserver = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          imageRef.current.classList.add("image-in-view");
        }
      },
      { threshold: 0.2 }
    );
    if (imageRef.current) imgObserver.observe(imageRef.current);

    return () => {
      observer.disconnect();
      imgObserver.disconnect();
    };
  }, []);

  return (
    <section className="founder-section alt-theme">
      <div className="founder-bg-art"></div>
      <div className="founder-content-wrapper">
        <div className="founder-image-outer">
          <div className="founder-image-frame" ref={imageRef}>
            <img
              src={founderImage}
              alt="Founder Kshitij Mathur"
              className="founder-image"
              loading="lazy"
              draggable="false"
            />
            <div className="founder-image-glow" />
          </div>
        </div>
        <div className="founder-text-glass" ref={textBlockRef}>
          <h2 className="founder-headline">
            <span className="founder-headline-accent">Founder</span>
          </h2>
          <blockquote className="founder-quote">
            "Visionaries blend literature, medicine, and entrepreneurship into a
            narrative of passion and purpose."
          </blockquote>
          <p className="founder-story">{founderStory}</p>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
