import { React, useState, useEffect,useRef } from "react";
import "./About.css";

import { FaIdCard, FaBirthdayCake } from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import matlab from "../../assets/Matlab_Logo.png";
import { SiLatex } from "react-icons/si";
import windows from "../../assets/windows.png";
import microsoft from "../../assets/microsoft.png";

import { FaGoogleScholar, FaGraduationCap } from "react-icons/fa6";

import hu from "../../assets/hu.png";
import milanoUn from "../../assets/milanouni.svg";
import franceuni from "../../assets/franceuni.jpeg";

import { Title } from "../../components/index";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

import { MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdb-react-ui-kit";
import { api } from "../../constants/apiLink";
import { Helmet } from "react-helmet-async";
import researchGate from "../../assets/researchGate.png";
import GJU from "../../assets/GJU.png";
import google from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import orcid from "../../assets/orcid.png";
import energyGroup from "../../assets/energyGroup.png";
import scopus from "../../assets/scopus.jpg";
import webOfScience from "../../assets/web-of-science.png";

const About = () => {
  const [Item, setItem] = useState([]);
  const [slide, setSlide] = useState(0);
  const [ImageSrc, setImageSrc] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [slide1, setSlide1] = useState(0);
  const [aboutText, setAboutText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fetchData = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "About",
        section: "AboutMe",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setAboutText(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // alert("Something went wrong while fetching data.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/about`);
        console.log(response);
        if (response.data.images) {
          setImages(response.data.images);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching the latest image:", error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);
  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  const [cards2, setCards2] = useState([
    {
      link: "https://www.researchgate.net/profile/Sameer-Al-Dahidi",
      img: researchGate,
    },
    {
      link: "https://www.gju.edu.jo/content/dr-sameer-al-dahidi-8520",
      img: GJU,
    },
    {
      link: "https://www.linkedin.com/in/sameer-al-dahidi-b2031b120/",
      img: linkedin,
    },
    {
      link: "https://scholar.google.com/citations?user=TdFloggAAAAJ&hl=en%20",
      img: google,
    },
    {
      link: "https://www.scopus.com/authid/detail.uri?authorId=56271830200",
      img: scopus,
    },
    {
      link: "https://www.webofscience.com/wos/author/record/AFM-7470-2022",
      img: webOfScience,
    },
    { link: "https://orcid.org/0000-0002-7745-7784", img: orcid },
    {
      link: "https://research.ju.edu.jo/research/groups/ERT/Home.aspx",
      img: energyGroup,
    },
   
  ]);
  const [isPaused, setIsPaused] = useState(false);
const containerRef = useRef(null);
const scrollPosition = useRef(0); // Track the current scroll position

useEffect(() => {
  const container = containerRef.current;

  if (!container) {
    console.error("Container ref is not attached!");
    return;
  }

  let animationFrameId;

  const scrollContainer = () => {
    if (container && !isPaused) {
    
      scrollPosition.current += 1; 

    
      if (scrollPosition.current >= container.scrollWidth / 2) {
        scrollPosition.current = 0;
      }

    
      container.style.transform = `translateX(-${scrollPosition.current}px)`;
    }

   
    animationFrameId = requestAnimationFrame(scrollContainer);
  };


  animationFrameId = requestAnimationFrame(scrollContainer);

 
  return () => cancelAnimationFrame(animationFrameId);
}, [isPaused]);
  // const nextSlide1 = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex + 3 < cards2.length ? prevIndex + 3 : 0 // Reset to 0 when reaching the end
  //   );
  // };
  
  // // Function to go to the previous 3 cards
  // const prevSlide1 = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex - 3 >= 0 ? prevIndex - 3 : cards2.length - 3 // Wrap around to the last 3 cards
  //   );
  // };
  
  // // Slice the visible cards
  // const visibleCards = cards2.slice(currentIndex, currentIndex + 3);
  
  // Interval effect to automatically cycle through cards
 
  

  return (
    <div className="About-container">
      <Helmet>
        <title>About Dr. Sameer Al-Dahidi</title>
        <meta
          name="description"
          content="Learn more about Dr. Sameer Al-Dahidi's academic background, professional experience, and achievements and skills."
        />
        <meta
          name="keywords"
          content="Dr. Sameer Al-Dahidi, about, academic background, professional experience, achievements ,skills"
        />
        <link rel="canonical" href="https://sameer-aldahidi.com/about" />
      </Helmet>
      <div className="About_ImageSlider-container  font-Poppins">
        <div className="About_ImageSlider-container-inner">
          <div className="About_ImageSlider-container-left_side">
            <div className="About_ImageSlider-container-doctor-name">
              Dr.&nbsp; Sameer Al-Dahidi ,PHD,MSC,BSC,CMR
            </div>
            <div className="About_ImageSlider-container-text">{aboutText}</div>
          </div>

          <div className="About_ImageSlider-container-right_side">
            <div className="AboutImageSlider">
              <BsArrowLeftCircleFill
                className="arrowAbout arrowAbout-left"
                onClick={prevSlide}
              />

              {images.map((data, idx) => {
                return (
                  <img
                    src={data.path}
                    alt={"img"}
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
                {images.map((_, idx) => {
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
        <Title MainTitle="Personal Information" />
        <div className="personalInfo-cards">
          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <FaBirthdayCake className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style ">
              Nov 12th, 1986, Kuwait
            </div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <FaIdCard className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style ">Jordanian</div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <MdFamilyRestroom className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style ">
              Married(two children)
            </div>
          </div>

          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <LuPhone className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style ">+962 77 6 93 98 91</div>
          </div>
          <div className="personalInfo-card">
            <div className="personalInfo-icon-box">
              <MdOutlineMail className="personalInfo-icon-style" />
            </div>
            <div className="personalInfo-text-style ">
              sameer.aldahidi@gju.edu.jo
            </div>
          </div>
        </div>
      </div>

      <div className="bg-custom-color">
        <Title MainTitle="Education" />

        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol md="6" offsetMd="3">
              <ul className="timeline-3">
                <li className="education-item">
                  <img
                    src={milanoUn}
                    alt="PhD Logo"
                    className="education-logo"
                  />
                  <div className="education-content">
                    <FaGraduationCap
                      style={{ color: "rgba(0, 52, 102, 1)", fontSize: "40px" }}
                    />
                    <h6>Ph.D. in Energy and Nuclear Science and Technology</h6>
                    <div className="card-date">January 2013 – March 2016</div>
                    <p className="mt-2 par">
                      Politecnico di Milano, Italy 1st (Italy), 7th (Europe),
                      18th (world) in the subject of Engineering and Technology,
                      and 123rd (world), entering the world’s top 9% of
                      excellent universities. Thesis “Development of Data-Driven
                      Methods for Prognostics and Health Management under
                      Variable Operational Conditions in Industrial Equipment”.
                      Marie Curie Ph.D. Fellowship within the European Project
                      “Innovation through Human Factors in risk analysis and
                      management” (InnHF). Ph.D. with Honors (the highest
                      possible grade).
                    </p>
                  </div>
                </li>
                <li className="education-item">
                  <img
                    src={franceuni}
                    alt="M.Sc. Logo"
                    className="education-logo"
                  />
                  <div className="education-content">
                    <FaGraduationCap
                      style={{ color: "rgba(0, 52, 102, 1)", fontSize: "40px" }}
                    />
                    <h6>M.Sc. in Nuclear Energy, Operations</h6>
                    <div className="card-date">
                      September 2010 – September 2012
                    </div>
                    <p className="mt-2 par">
                      École Centrale Paris and Université Paris-Sud XI, France
                      GPA of 16/20 (Very Good – Rank 1 out of 12). Master
                      Scholarship from French Government, 2010-2012.
                    </p>
                  </div>
                </li>

                <li className="education-item">
                  <img src={hu} alt="M.Sc. Logo" className="education-logo" />
                  <div className="education-content">
                    <FaGraduationCap
                      style={{ color: "rgba(0, 52, 102, 1)", fontSize: "40px" }}
                    />
                    <h6>B.Sc. in Electrical and Computer Engineering</h6>
                    <div className="card-date">September 2004 – June 2008</div>
                    <p className="mt-2 par">
                      The Hashemite University, Jordan GPA of 3.92/4.0
                      (Excellent – Rank 1 out of 121). Rank 2nd out of 535
                      graduates from all Jordanian universities in the
                      University Efficiency Examination, held by the Ministry of
                      Higher Education and Scientific Research, in the
                      Electrical Engineering specialization, Jordan.
                    </p>
                  </div>
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
            <div className="computerSkills-text ">Matlab</div>
          </div>

          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle">
              <img
                src={windows}
                alt="windows"
                className="computerSkills-card-Circle-img"
              />
            </div>
            <div className="computerSkills-text ">Windows</div>
          </div>

          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle">
              <img
                src={microsoft}
                alt="matlab"
                className="computerSkills-card-Circle-img office"
              />
            </div>
            <div className="computerSkills-text ">Ms office</div>
          </div>
          <div className="computerSkills-card">
            <div className="computerSkills-card-Circle latex">
              <SiLatex className="latex-icon" />
            </div>
            <div className="computerSkills-text ">Latex</div>
          </div>
        </div>
      </div>
      <div className="Language-container section-container">
        <Title MainTitle="Language" />
        <div className="Language-container-parts">
          <div className="Language-container-part1 ">
            <div className="Language-name">Arabic</div>
            <div className="language-measurement-container">
              <div className="language-rate">Native</div>
              <div className="language-measure"></div>
            </div>
          </div>

          <div className="Language-container-part1 ">
            <div className="Language-name">English</div>
            <div className="language-measurement-container">
              <div className="language-rate">Fluent</div>
              <div className="language-measure"></div>
            </div>
          </div>

          <div className="Language-container-part1 ">
            <div className="Language-name">French</div>
            <div className="language-measurement-container">
              <div className="language-rate">Good</div>
              <div className="language-measure good"></div>
            </div>
          </div>
          <div className="Language-container-part1 ">
            <div className="Language-name">Italian</div>
            <div className="language-measurement-container">
              <div className="language-rate">Good</div>
              <div className="language-measure good"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProfessionalWebPages-container ">
        <Title MainTitle="Professional Webpages" />

        <div
  className="ProfessionalWebPages-slider "   
  onMouseEnter={() => setIsPaused(true)} // Pause on hover
  onMouseLeave={() => setIsPaused(false)} // Resume on leave
>
  <div className="ProfessionalWebPages-track"ref={containerRef}>
    {cards2.map((card12, idx) => (
      <div className="ProfessionalWebPages-container-card" key={idx}   >
        <a href={card12.link} target="_blank" rel="noopener noreferrer">
          <img
            src={card12.img}
            alt={`Card12 ${idx}`}
            className="logoImage"
          />
        </a>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
};

export default About;
