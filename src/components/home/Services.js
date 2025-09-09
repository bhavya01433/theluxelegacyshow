import {
  Hammer,
  Home,
  LayoutTemplate,
  Building2,
  Ruler,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import "./Services.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: <Ruler size={40} color="var(--secondary)" />,
    title: "Architecture & Planning",
    description:
      "Innovative blueprints and designs tailored to your space and goals. Our expert architects combine creativity with functionality to create spaces that inspire.",
    features: [
      "Custom Design Solutions",
      "Space Optimization",
      "Sustainable Planning",
    ],
    link: "/services/architecture",

    process: [
      "Initial Consultation",
      "Concept Development",
      "Design Refinement",
      "Final Approval",
    ],
  },
  {
    icon: <Hammer size={40} color="var(--secondary)" />,
    title: "Renovation & Remodeling",
    description:
      "Transforming structures with modern, functional upgrades. We breathe new life into existing spaces while maintaining their character and improving functionality.",
    features: ["Structural Upgrades", "Modern Amenities", "Energy Efficiency"],
    link: "/services/renovation",
    process: [
      "Site Assessment",
      "Design Planning",
      "Material Selection",
      "Execution",
    ],
  },
  {
    icon: <LayoutTemplate size={40} color="#ffd700" />,
    title: "Interior Designing",
    description:
      "Creating elegant, functional interiors that reflect your personality. Our designs blend aesthetics with practicality to create spaces you'll love living in.",
    features: ["Custom Furnishings", "Color Schemes", "Lighting Design"],
    link: "/services/interior",
    process: [
      "Style Assessment",
      "Space Planning",
      "Material Selection",
      "Installation",
    ],
  },
  {
    icon: <Home size={40} color="var(--secondary)" />,
    title: "Residential Construction",
    description:
      "Building beautiful, lasting homes from foundation to finish. We combine quality materials with expert craftsmanship to create your dream home.",
    features: ["Quality Materials", "Expert Craftsmanship", "Timely Delivery"],
    link: "/services/residential",
    process: [
      "Site Preparation",
      "Foundation Work",
      "Construction",
      "Finishing",
    ],
  },
  {
    icon: <Building2 size={40} color="var(--secondary)" />,
    title: "Commercial Construction",
    description:
      "Constructing modern workspaces and commercial structures. We deliver functional, efficient spaces that support your business goals and enhance productivity.",
    features: [
      "Modern Infrastructure",
      "Business Solutions",
      "Future-Proof Design",
    ],
    link: "/services/commercial",
    process: [
      "Business Analysis",
      "Design Development",
      "Construction",
      "Handover",
    ],
  },
  {
    icon: <ClipboardList size={40} color="var(--secondary)" />,
    title: "Project Management",
    description:
      "Streamlining timelines and budgets for efficient project delivery. Our experienced team ensures your project stays on track and within budget.",
    features: ["Timeline Management", "Budget Control", "Quality Assurance"],
    link: "/services/project",
    process: [
      "Project Planning",
      "Resource Allocation",
      "Progress Monitoring",
      "Delivery",
    ],
  },
];

const Services = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          } else {
            entry.target.classList.remove("in-view");
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-left">
          <div className="services-heading-content">
            <h2 className="services-heading-title">Founder</h2>
            <p className="services-description">
              Kshitij Mathur, the Founder and Creative Director of The Luxe
              Legacy Show, is a 21-year-old visionary whose journey blends
              literature, medicine, and entrepreneurship into a unique narrative
              of passion and purpose. Born in Sawai Madhopur, Rajasthan, Kshitij
              grew up immersed in an environment where education and
              storytelling were deeply valued—his mother, a Hindi and Sanskrit
              teacher, instilled in him the discipline of learning and the
              beauty of language. This influence led him to explore literature
              early, and by 2020, he had authored his first book, a heartfelt
              novel that delved into the meaning of friendship and connection.
            </p>
          </div>
        </div>

        <div className="services-right">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="service-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="icon-container">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <span key={idx} className="feature-tag">
                    {feature}
                  </span>
                ))}
              </div>
              <div className="service-process">
                {service.process.map((step, idx) => (
                  <div key={idx} className="process-step">
                    <span className="step-number">{idx + 1}</span>
                    <span className="step-text">{step}</span>
                  </div>
                ))}
              </div>
              <span className="learn-more-text">
                Learn More <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
