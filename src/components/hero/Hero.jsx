import { React, useEffect, useState } from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import MainButton from "../mainButton/MainButton";
import "../../constants/constants.css";
import doctorPicture from "../../assets/1f03970ed1fadcf1638d0b429a02cefe.png";
import { MainContent } from "../index";
import { Link, useLocation } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { api } from "../../constants/apiLink";

const Hero = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [heroText, setHeroText] = useState("");

  if (inView && !hasStarted) {
    setHasStarted(true);
  }

  const location = useLocation();
  const isAboutPage = location.pathname === "/about";

  const fetchHeroSection = async () => {
    try {
      const data = await axios.post(
        `${api}content/get-content`,
        { page: "LandingPage", section: "Hero" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setHeroText(data.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroSection();
  });

  return (
    <section className="hero_section-container section-container">
      <div className="hero_section-center">
        <div className="hero_section-left_side font-Poppins">
          <div className="hero_section-doctor-name"> Dr.Sameer Al-Dahidi</div>
          <MainContent>{heroText}</MainContent>
          {!isAboutPage && (
            <Link to="/about">
              <MainButton>
                Read More <FaArrowRightLong />
              </MainButton>
            </Link>
          )}
        </div>
        <div className="hero_section-right_side">
          <div
            className={`hero_section-right_side-image-container ${
              hasStarted ? "animate" : ""
            }`}
            ref={ref}
          >
            <div className="image-container_inner-circle">
              <img
                className="image-container_inner-circle_img"
                src={doctorPicture}
                alt="D.Sammer Al-Dahidi"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
