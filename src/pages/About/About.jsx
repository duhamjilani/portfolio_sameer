import React from "react";
import "./About.css";

import { FaIdCard, FaBirthdayCake } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import matlab from "../../assets/Matlab_Logo.png";
import { SiLatex } from "react-icons/si";
import windows from "../../assets/windows.png";
import microsoft from "../../assets/microsoft.png";

import { Hero, Title } from "../../components/index";
const About = () => {
  return (
    <div >
      <Hero />
      <div className="personalInfo-container section-container">
        <Title MainTitle="Personal information" />
        <div className="personalInfo-cards">
          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <FaBirthdayCake className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style font-Poppins">
              Nov 12th, 1986, Kuwait
            </div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <FaIdCard className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style font-Poppins">
              Jordanian
            </div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <MdFamilyRestroom className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style font-Poppins">
              Married(two children)
            </div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <LuPhone className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style font-Poppins">
              +962 77 6 93 98 91
            </div>
          </div>
          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <MdOutlineMail className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style font-Poppins">
              sameer.dahidi@yahoo.com
            </div>
          </div>
        </div>
      </div>
       <div className="Education-container section-container">
        <Title MainTitle="Education" />
        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">Bachelore</div>
          <div className="Education-text-container-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </div>
        </div>

        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">Bachelore</div>
          <div className="Education-text-container-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </div>
        </div>

        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">PHD</div>
          <div className="Education-text-container-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </div>
        </div>
      </div> 
      <div className="Language-container section-container">
        <Title MainTitle="Language" />
        <div className="Language-container-parts">
          <div className="Language-container-part1 font-Poppins">
            <div className="Language-name">English</div>
            <div className="language-measurement-container">
              <div className="language-rate">Fluent</div>
              <div className="language-measure"></div>
            </div>
          </div>

          <div className="Language-container-part1 font-Poppins">
            <div className="Language-name">Arabic</div>
            <div className="language-measurement-container">
              <div className="language-rate">Fluent</div>
              <div className="language-measure"></div>
            </div>
          </div>
          <div className="Language-container-part1 font-Poppins">
            <div className="Language-name">French</div>
            <div className="language-measurement-container">
              <div className="language-rate">Good</div>
              <div className="language-measure good"></div>
            </div>
          </div>
          <div className="Language-container-part1 font-Poppins">
            <div className="Language-name">Italian</div>
            <div className="language-measurement-container">
              <div className="language-rate">Good</div>
              <div className="language-measure good"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="computerSkills-container section-container">
        <Title MainTitle="Computer Skills" />
        <div className="computerSkills-cards">
          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle">
              <img
                src={matlab}
                alt="matlab"
                className="computerSkills-card-Circle-img"
              />
            </div>
            <div className="computerSkills-text font-Poppins">Matlab</div>
          </div>

          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle latex">
              <SiLatex className="latex-icon" />
            </div>
            <div className="computerSkills-text font-Poppins">Latex</div>
          </div>

          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle">
              <img
                src={windows}
                alt="matlab"
                className="computerSkills-card-Circle-img"
              />
            </div>
            <div className="computerSkills-text font-Poppins">Windows</div>
          </div>

          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle">
              <img
                src={microsoft}
                alt="matlab"
                className="computerSkills-card-Circle-img office"
              />
            </div>
            <div className="computerSkills-text font-Poppins">Ms office</div>
          </div>
        </div>
      </div>
      <div className="Education-container section-container">
        <Title MainTitle="Professional Webpages" />
        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">Google Scholar </div>
          <div className="Education-text-container-desc">
            <a href=": https://scholar.google.com/citations?user=TdFloggAAAAJ&hl=en%20">
              scholar.google
            </a>
          </div>
        </div>

        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">Bachelore</div>
          <div className="Education-text-container-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </div>
        </div>

        <div className="Education-text-container font-Poppins">
          <div className="Education-text-container-title ">PHD</div>
          <div className="Education-text-container-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;
