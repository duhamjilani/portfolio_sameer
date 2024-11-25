import { React, useState, useEffect } from "react";
import "./About.css";

import { FaIdCard, FaBirthdayCake } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import matlab from "../../assets/Matlab_Logo.png";
import { SiLatex } from "react-icons/si";
import windows from "../../assets/windows.png";
import microsoft from "../../assets/microsoft.png";
import { SiResearchgate } from "react-icons/si";
import { FaGoogleScholar } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";
import { Title } from "../../components/index";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import pic1 from "../../assets/pic1.jpeg";
import trainingPic from "../../assets/training-pic.png";

import pic3 from "../../assets/pic3.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import ExpTimeLine from "../../components/ExpTimeline/ExpTimeline";
import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdb-react-ui-kit";

const images1 = [
  {
    id: 1,
    image: pic1,
    altText: "Doctor image 1",
    description: "Doctor image 1",
  },
  {
    id: 2,
    image: trainingPic,
    altText: "Doctor image 2",
    description: "Doctor image 2",
  },
  {
    id: 3,
    image: pic3,
    altText: "Doctor image 3",
    description: "Doctor image 3",
  },
];

const About = () => {
  const [Item, setItem] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchData = () => {
    axios
      .get("http://localhost:4003/images")
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
        console.log(Item);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("Something went wrong");
      });
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images1.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setSlide(slide === Item.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === Item.length - 1 ? 0 : slide - 1);
  };
  return (
    <div className="About-container">
      <div className="About_ImageSlider-container  font-Poppins">
        <div className="About_ImageSlider-container-inner">
          <div className="About_ImageSlider-container-left_side">
            <div className="About_ImageSlider-container-doctor-name">
              Dr.Sameer Al-Dahidi ,PHD,MSC,BSC,CMR
            </div>
            <div className="About_ImageSlider-container-text">
              Dr. Al-Dahidi is an Associate Professor at the Department of
              Mechanical and Maintenance Engineering, School of Applied
              Technical Sciences, German Jordanian University. He also serves as
              Program Coordinator and Quality Assurance Manager for the
              EDU-SYRIA scholarship project. He holds a B.Sc. in Electrical and
              Computer Engineering from The Hashemite University, an M.Sc. in
              Nuclear Energy from Ecole Centrale Paris and Université Paris-Sud
              11, and a Ph.D. from Politecnico di Milano. His work focuses on
              AI, machine learning, and optimization for industrial challenges,
              with a strong interest in predictive maintenance and renewable
              energy systems.
            </div>
          </div>

          <div className="About_ImageSlider-container-right_side">
            <div className="AboutImageSlider">
              <BsArrowLeftCircleFill
                className="arrowAbout arrowAbout-left"
                onClick={prevSlide}
              />

              {images1.map((data, idx) => {
                return (
                  <img
                    src={data.image}
                    alt={data.altText}
                    key={idx}
                    className={
                      slide === idx ? "AboutSlide" : "AboutSlide slide-hidden"
                    }
                  />
                );
              })}

              <BsArrowRightCircleFill
                className="arrowAbout arrowAbout-right"
                onClick={nextSlide}
              />
              <span className="indicatorsAbout">
                {images1.map((_, idx) => {
                  return (
                    <button
                      key={idx}
                      onClick={() => setSlide(idx)}
                      className={
                        slide === idx
                          ? "indicatorAbout"
                          : "indicatorAbout indicatorAbout-inactive"
                      }
                    ></button>
                  );
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="personalInfo-container section-container ">
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
      <div className="bg-custom-color ">
        <Title MainTitle="Education" />

        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol md="6" offsetMd="3">
              <ul className="timeline-3">
                <li>
                  <MDBIcon
                    fas
                    icon="graduation-cap"
                    size="2x"
                    style={{ color: "rgba(0, 52, 102, 1)" }}
                    className="animate__animated animate__fadeIn animate__infinite animate__delay-2s"
                  />
                  <h6>Ph.D. in Energy and Nuclear Science and Technology</h6>
                  <div className="card-date">January 2013 – March 2016</div>
                  <p className="mt-2">
                    1st (Italy), 7th (Europe), 18th (world) in the subject of
                    Engineering and Technology, and 123rd (world), entering the
                    world’s top 9% of excellent universities. Thesis
                    “Development of Data-Driven Methods for Prognostics and
                    Health Management under Variable Operational Conditions in
                    Industrial Equipment”. Marie Curie Ph.D. Fellowship within
                    the European Project “Innovation through Human Factors in
                    risk analysis and management” (InnHF). Ph.D. with Honors
                    (the highest possible grade).
                  </p>
                </li>
                <li>
                  <MDBIcon
                    fas
                    icon="graduation-cap"
                    size="2x"
                    style={{ color: "rgba(0, 52, 102, 1)" }}
                    className="animate__animated animate__fadeIn animate__infinite animate__delay-2s"
                  />
                  <h6>M.Sc. in Nuclear Energy, Operations</h6>
                  <div className="card-date">
                    September 2010 – September 2012
                  </div>
                  <p className="mt-2">
                    École Centrale Paris and Université Paris-Sud XI, France GPA
                    of 16/20 (Very Good – Rank 1 out of 12). Master Scholarship
                    from French Government, 2010-2012.
                  </p>
                </li>
                <li>
                  <MDBIcon
                    fas
                    icon="graduation-cap"
                    size="2x"
                    style={{ color: "rgba(0, 52, 102, 1)" }}
                    className="animate__animated animate__fadeIn animate__infinite animate__delay-2s"
                  />
                  <h6>B.Sc. in Electrical and Computer Engineering</h6>
                  <div className="card-date">September 2004 – June 2008</div>
                  <p className="mt-2">
                    The Hashemite University, Jordan GPA of 3.92/4.0 (Excellent
                    – Rank 1 out of 121). Rank 2nd out of 535 graduates from all
                    Jordanian universities in the University Efficiency
                    Examination, held by the Ministry of Higher Education and
                    Scientific Research, in the Electrical Engineering
                    specialization, Jordan.
                  </p>
                </li>
                <li>
                  <MDBIcon
                    fas
                    icon="graduation-cap"
                    size="2x"
                    style={{ color: "rgba(0, 52, 102, 1)" }}
                    className="animate__animated animate__fadeIn animate__infinite animate__delay-2s"
                  />
                  <h6>
                    General Secondary Education Certificate (Scientific Stream)
                  </h6>
                  <div className="card-date">September 2003 – August 2004</div>
                  <p className="mt-2">
                    Alshamila Secondary School, Jordan GPA of 92.6/100
                    (Excellent).
                  </p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>

      <div className="computerSkills-container section-container ">
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
            <div className="computerSkills-card-Circle">
              <img
                src={windows}
                alt="windows"
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
          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle latex">
              <SiLatex className="latex-icon" />
            </div>
            <div className="computerSkills-text font-Poppins">Latex</div>
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
      <div className="ProfessionalWebPages-container section-container">
        <Title MainTitle="Professional Webpages" />
        <div className="ProfessionalWebPages-container-cards font-Poppins">
          <div className="ProfessionalWebPages-container-card">
            <a href="https://www.researchgate.net/profile/Sameer-Al-Dahidi">
              <SiResearchgate className="ProfessionalWebPages-container-card-icon" />
            </a>
          </div>
          <div className="ProfessionalWebPages-container-card">
            <a href="https://scholar.google.com/citations?user=TdFloggAAAAJ&hl=en%20">
              <FaGoogleScholar className="ProfessionalWebPages-container-card-icon" />
            </a>
          </div>
          <div className="ProfessionalWebPages-container-card">
            <a href="https://www.gju.edu.jo/content/dr-sameer-al-dahidi-8520">
              <FaUniversity className="ProfessionalWebPages-container-card-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
