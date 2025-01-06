import { React, useEffect, useState } from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import MainButton from "../mainButton/MainButton";
import "../../constants/constants.css";
import doctorPicture from "../../assets/1f03970ed1fadcf1638d0b429a02cefe.png";
import { MainContent } from "../index";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { api } from "../../constants/apiLink";

const Hero = () => {
  const [heroText, setHeroText] = useState(""); // To store the fetched text
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const location = useLocation();

  const fetchHeroSection = async () => {
    try {
      setLoading(true); // Start loader
      const response = await axios.post(
        `${api}content/get-content`,
        { page: "LandingPage", section: "Hero" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setHeroText(response.data.data.content); // Update heroText
    } catch (error) {
      setError("Failed to fetch hero content"); // Handle errors
      console.error(error);
    } finally {
      setLoading(false); // Stop loader
    }
  };

  useEffect(() => {
    fetchHeroSection();
  }, []); // Empty array ensures it runs only on mount

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Loading </p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <section className="hero_section-container section-container">
      <div className="hero_section-center">
        <div className="hero_section-left_side font-Poppins">
          <div className="hero_section-doctor-name">
            Dr.&nbsp;Sameer Al-Dahidi
          </div>
          <MainContent>{heroText}</MainContent>

          <Link to="/about">
            <MainButton>
              Read More <FaArrowRightLong />
            </MainButton>
          </Link>
        </div>
        <div className="hero_section-right_side">
          <div className="hero_section-right_side-image-container">
            <div className="image-container_inner-circle">
              <img
                className="image-container_inner-circle_img"
                src={doctorPicture}
                alt="Dr. Sameer Al-Dahidi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
