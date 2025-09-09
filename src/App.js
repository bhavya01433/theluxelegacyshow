import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import VideoBackground from "./components/common/VideoBackground.jsx";
import Contact from "./components/common/Contact";
import About from "./components/home/About";
// import Services from "./components/home/Services";
import OurPartners from "./components/home/OurPartners.jsx";
import FounderSection from "./components/home/FounderSection.jsx";
// import Portfolio from "./components/home/Portfolio";
import Season1 from "./components/home/Season1";
import ServiceDetail from "./pages/services/ServiceDetail";
import PortfolioDetail from "./pages/portfolio/portfolioDetail";
import MasterpieceDetail from "./pages/portfolio/MasterpieceDetail";
import ScrollToTop from "./components/common/ScrollToTop";
import Footer from "./components/common/Footer";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <VideoBackground />
              <ScrollToTop />

              {/* SEASON 1 Section */}
              <section id="season1">
                <Season1 />
              </section>
              {/* FOUNDER Section */}
              <section id="founder">
                <FounderSection />
              </section>
              {/* SERVICES Section */}
              {/* <section id="services">
                <Services />
              </section> */}
              {/* PORTFOLIO Section */}
              {/* <section id="portfolio">
                <Portfolio />
              </section> */}

              {/* ABOUT Section */}
              <section id="about">
                <About />
              </section>
              <section id="partners">
                <OurPartners />
              </section>
            </>
          }
        />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route
          path="/portfolio/MasterpieceDetail"
          element={<MasterpieceDetail />}
        />
        <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
