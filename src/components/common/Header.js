import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/">
          <img
            src="/legacylogo.svg"
            alt="Construct Edge Logo"
            className="logo"
          />
        </Link>
      </div>
      <div className={`nav ${menuOpen ? "active" : ""}`}>
        <Link to="/" onClick={toggleMenu}>
          Home
        </Link>

        {/* <Link to="/#about" smooth onClick={toggleMenu}>
          About
        </Link> */}

        <Link to="/#services" smooth onClick={toggleMenu}>
          Team
        </Link>

        <Link to="/#founder" smooth onClick={toggleMenu}>
          Season 1
        </Link>

        <Link to="/#testimonial" smooth onClick={toggleMenu}>
          Partners
        </Link>

        <Link to="/#testimonial" smooth onClick={toggleMenu}>
          News & Media
        </Link>

        {/* <Link to="/contact">
          <button className="btn request-btn">Request a Quote</button>
        </Link> */}
      </div>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
