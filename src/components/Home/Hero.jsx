import React from "react";
import "./Hero.css";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
      <section className="hero_section">
        <div className="center">
          <div className="left_side  font-Poppins">
            <h4 className=" doctor "> Doctor</h4>
            <h2 className=" name">Sameer Al-Dahidi</h2>
            <p className="pre_about">
              Dr. Al-Dahidi is an Associate Professor at the Department of
              Mechanical and Maintenance Engineering, School of Applied
              Technical Sciences, German Jordanian University He also serves as
              Program Coordinator and Quality Assurance Manager for the
              EDU-SYRIA scholarship project
            </p>
            <button className="btn" >
          Read More <FaArrowRightLong />

        </button>
          </div>
          <div className="right_side">
            <div className="circle">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
