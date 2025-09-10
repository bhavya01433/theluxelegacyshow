import "./About.css";

const stats = [
  {
    id: 1,
    image: "/images/Akshita.webp",
    name: "Akshita Mathur",
    position: "Cofounder",
  },
  {
    id: 2,
    image: "/images/Daman.webp",
    name: "Daman",
    position: "Show Coordinator & Model Manager",
  },
  {
    id: 3,
    image: "/images/Ravneet.webp",
    name: "Ravneet",
    position: "Fashion Choreographer & Show Director",
  },
  {
    id: 4,
    image: "/images/Prachi.webp",
    name: "Prachi",
    position: "Fashion Stylist & Creative Director",
  },
];

function About() {
  return (
    <section
      className="about-section"
      id="about"
      style={{ backgroundImage: "url('/stats-bgg.jpeg')" }}
    >
      <div className="about-content">
        <h2 className="about-title">Team</h2>
        <p className="about-text">
          Behind every iconic show is a team of creative masterminds and
          seasoned professionals who bring dreams to life. Meet the exceptional
          team that ensures Luxe Legacy isn’t just an event—it’s an
          unforgettable experience.
        </p>
      </div>
      <div className="stats-section">
        <h2 className="stats-tagline">
          From Diverse Talents to Shared Triumphs. We Are Team Luxe.
        </h2>
        <div className="stats-cards">
          {stats.map((stat, i) => (
            <div
              className="stat-card fade-in-up-glow"
              key={stat.id}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <img
                src={stat.image}
                alt={stat.name + " photo"}
                className="stat-img"
              />
              <div className="stat-name">{stat.name}</div>
              <div className="stat-position">{stat.position}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
