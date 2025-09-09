import { useEffect, useRef } from "react";
import "./FounderSection.css";

const founderStory = `
  Kshitij Mathur, the Founder and Creative Director of The Luxe Legacy Show, is a 21-year-old visionary whose journey blends literature, medicine, and entrepreneurship into a unique narrative of passion and purpose. Born in Sawai Madhopur, Rajasthan, Kshitij grew up immersed in an environment where education and storytelling were deeply valued—his mother, a Hindi and Sanskrit teacher, instilled in him the discipline of learning and the beauty of language. This influence led him to explore literature early, and by 2020, he had authored his first book, a heartfelt novel that delved into the meaning of friendship and connection.

  Alongside writing, Kshitij also discovered his passion for conversations and storytelling through 
podcasting. Over time, his podcast became a platform where some of India’s most respected voices 
came forward to share their journeys. Among his guests were Swami Ramdev, the globally 
renowned yoga guru and co-founder of Patanjali Ayurved, whose work has made yoga and 
Ayurveda household practices across India; Swami Chidanand Saraswati, the President of 
Parmarth Niketan Ashram, Rishikesh, one of the largest spiritual institutions in India and a 
leader in environmental and humanitarian causes; Bhagwati Saraswati, a respected spiritual guide 
known for her work in uplifting communities; and Sadhvi Ritambhara, a revered religious and 
social leader recognized for her impactful voice in socio-spiritual movements. These conversations 
not only expanded Kshitij’s perspective but also established him as a host capable of engaging with 
diverse and influential personalities. By associating his name with leaders of such stature, his 
podcast carved a unique niche, blending culture, spirituality, and thought leadership into one 
accessible space.
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
