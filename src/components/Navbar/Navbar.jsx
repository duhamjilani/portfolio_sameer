import { React, useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MainButton from "../mainButton/MainButton";
import { api } from "../../constants/apiLink";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cvPath, setCvPath] = useState(""); // State to store the latest CV path

  const dropdownRef = useRef(null);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  
  const openCV = () => {
    if (cvPath) {
     
      window.open(cvPath, "_blank");
    }
  };

  // Toggle dropdown menu visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
  }, []); // Only run once when the component is mounted

  // Handle clicking outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!dropdownRef.current.contains(event.target)) {
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
            <li
              className="Link_nav dropdown"
              onClick={toggleDropdown}
              ref={dropdownRef}
            >
              Experience ▼
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li onClick={() => setIsDropdownOpen(false)}>
                    <Link to="/academicExp" className="dropdown-item1">
                      Academic And Professional
                    </Link>
                  </li>
                  <li onClick={() => setIsDropdownOpen(false)}>
                    <Link to="/industrialExp" className="dropdown-item1">
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
