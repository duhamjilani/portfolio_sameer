import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";
import MainButton from "../mainButton/MainButton";
import "../../constants/constants.css";
import doctorPicture from "../../assets/1f03970ed1fadcf1638d0b429a02cefe.png";
import { MainContent } from "../index";

const Hero = () => {
  return (
    <section className="hero_section-container section-container">
      <div className="hero_section-center">
        <div className="hero_section-left_side font-Poppins">
          <div className="hero_section-doctor-title">Doctor</div>
          <div className="hero_section-doctor-name">Sameer Al-Dahidi</div>
          <MainContent>
            Dr. Al-Dahidi is an Associate Professor at the Department of
            Mechanical and Maintenance Engineering, School of Applied Technical
            Sciences, German Jordanian University. He also serves as Program
            Coordinator and Quality Assurance Manager for the EDU-SYRIA
            scholarship project.
          </MainContent>
          <MainButton>Read More {<FaArrowRightLong />}</MainButton>
        </div>
        <div className="hero_section-right_side">
          <div className="hero_section-right_side-image-container">
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
