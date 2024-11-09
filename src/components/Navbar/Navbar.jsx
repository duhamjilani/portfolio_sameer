import { React, useState,useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MainButton from "../mainButton/MainButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openCV = () => {
    window.open(
      `${process.env.PUBLIC_URL}/Al-Dahidi Sameer’s CV.pdf`,
      "_blank"
    );
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
            <li className="Link_nav dropdown" onClick={toggleDropdown} ref={dropdownRef}>
              Experience ▼
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => setIsDropdownOpen(false)}>
                    <Link to="/academicExp" className="dropdown-item">
                      Academic And Professional
                    </Link>
                  </li>
                  <li onClick={() => setIsDropdownOpen(false)}>
                    <Link to="/industrialExp" className="dropdown-item">
                      Industrial
                    </Link>
                  </li>
                </ul>
              )}
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
                Training And MemberShips
              </Link>
            </li>
          </ul>
        </div>
        <MainButton title={"Download CV"} functionality={openCV}>
          Download CV
        </MainButton>
      </nav>
    </div>
  );
};

export default Navbar;
