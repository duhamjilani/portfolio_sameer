import { React, useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import MainButton from "../mainButton/MainButton";
import { api } from "../../constants/apiLink";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cvPath, setCvPath] = useState("");

  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const openCV = () => {
    if (cvPath) {
      window.open(cvPath, "_blank");
    }
  };

  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        const response = await fetch(`${api}cv/latest`);
        const data = await response.json();
        if (data.path) {
          setCvPath(`${data.path}`);
        }
      } catch (error) {
        console.error("Error fetching the latest CV:", error);
      }
    };
    fetchLatestCV();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="navBar">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? "×" : "☰"}
      </div>
      <div className={`center_list ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <NavLink to="/" className="Link_nav" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="Link_nav" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li
            className="Link_nav dropdown"
            onClick={toggleDropdown}
            ref={dropdownRef}
          >
            Experience ▼
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    to="/academicExp"
                    className="dropdown-item1"
                    activeClassName="active"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Academic And Professional
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/industrialExp"
                    className="dropdown-item1"
                    activeClassName="active"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Industrial
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li>
            <NavLink to="/research" className="Link_nav" activeClassName="active">
              Research
            </NavLink>
          </li>
          <li>
            <NavLink to="/awards" className="Link_nav" activeClassName="active">
              Awards
            </NavLink>
          </li>
          <li>
            <NavLink to="/training" className="Link_nav" activeClassName="active">
              Training And MemberShips
            </NavLink>
          </li>
        </ul>
      </div>
      <MainButton title={"Download CV"} functionality={openCV}>
        Download CV
      </MainButton>
    </nav>
  );
};

export default Navbar;
