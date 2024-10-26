import { React, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCV = () => {
    window.open(
      `${process.env.PUBLIC_URL}/Al-Dahidi Sameer’s CV.pdf`,
      "_blank"
    );
  };
  return (
    <div>
      <nav className="navBar font-Poppins">
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? "×" : "☰"}
        </div>
        <div className={`center_list ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" className="Link_nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="Link_nav">
                About Me
              </Link>
            </li>
            <li>
              <Link to="/experience" className="Link_nav">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/research" className="Link_nav">
                Research
              </Link>
            </li>
            <li>
              <Link to="/awards" className="Link_nav">
                Awards
              </Link>
            </li>
            <li>
              <Link to="/training" className="Link_nav">
                Training
              </Link>
            </li>
          </ul>
        </div>
        <button className="download-btn" onClick={openCV}>
          Download CV
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
