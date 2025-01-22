import { React, useEffect, useState } from "react";
import {
  Hero,
  MainContent,
  WorkTitle,
  Counter,
  Title,
  AwardsCards,
  ResearchCards,
} from "../../components/index";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ExpTitle from "../../components/ExpTitle/ExpTitle";
import ExpTimeline from "../../components/ExpTimeline/ExpTimeline";
import "./home.css";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { api } from "../../constants/apiLink";
import { Helmet } from "react-helmet-async";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import Picture1 from "../../assets/Picture1.jpg";
import Picture2 from "../../assets/Picture2.png";
import Picture3 from "../../assets/Picture3.png";
import Picture4 from "../../assets/Picture4.png";
import Picture5 from "../../assets/Picture5.png";
import Picture6 from "../../assets/Picture6.png";
import Picture7 from "../../assets/Picture7.jpg";
import Picture8 from "../../assets/Picture8.jpg";
import Picture9 from "../../assets/Picture9.png";
import Picture10 from "../../assets/Picture10.png";
import Picture11 from "../../assets/Picture11.png";
import Picture12 from "../../assets/Picture12.png";

const Home = () => {
  const [achievementText, setAchievementText] = useState("");
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
  const [counterT1, setCounterT1] = useState("");
  const [counterT2, setCounterT2] = useState("");
  const [counterT3, setCounterT3] = useState("");
  const [counterT4, setCounterT4] = useState("");
  const [counterT5, setCounterT5] = useState("");
  const [counterT6, setCounterT6] = useState("");
  const [AwardCounter1, setAwardcounter1] = useState("");
  const [AwardCounter2, setAwardcounter2] = useState("");
  const [INDcounter1, setINDcounter1] = useState("");
  const [INDcounter2, setINDcounter2] = useState("");
  const [INDcounter3, setINDcounter3] = useState("");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [TeachingText, setTeachingText] = useState("");
  const [ExpText, setExpText] = useState("");
  const cards2 = [
    {
      img: Picture1,
    },
    {
      img: Picture2,
    },
    {
      img: Picture3,
    },
    {
      img: Picture4,
    },
    {
      img: Picture5,
    },
    {
      img: Picture6,
    },
    { img: Picture7 },
    {
      img: Picture8,
    },
  ];

  const cards3 = [
    {
      img: Picture9,
    },
    {
      img: Picture10,
    },
    {
      img: Picture11,
    },
    {
      img: Picture12,
    },
  ];

  const nextSlide1 = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 3 < cards2.length ? prevIndex + 3 : 0) // Reset to 0 when reaching the end
    );
  };

  // Function to go to the previous 3 cards
  const prevSlide1 = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 >= 0 ? prevIndex - 3 : cards2.length - 3) // Wrap around to the last 3 cards
    );
  };

  // Slice the visible cards
  const visibleCards = cards2.slice(currentIndex, currentIndex + 3);

  // Interval effect to automatically cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 3 < cards2.length ? prevIndex + 3 : 0) // Same logic for auto-slide
      );
    }, 3000); // Set your desired interval time (2 seconds here)

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [cards2]);

  const nextSlide2 = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex + 2 < cards3.length ? prevIndex + 2 : 0) // Reset to 0 when reaching the end
    );
  };

  // Function to go to the previous 3 cards
  const prevSlide2 = () => {
    setCurrentIndex1(
      (prevIndex) => (prevIndex - 2 >= 0 ? prevIndex - 2 : cards3.length - 2) // Wrap around to the last 3 cards
    );
  };

  // Slice the visible cards

  const visibleCards2 = cards3.slice(currentIndex1, currentIndex1 + 2);

  // Interval effect to automatically cycle through cards
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex1(
        (prevIndex) => (prevIndex + 2 < cards3.length ? prevIndex + 2 : 0) // Same logic for auto-slide
      );
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [cards3]);

  // Get the visible cards

  const fetchHeroSection = async () => {
    try {
      const data = await axios.post(
        `${api}content/get-content`,
        { page: "LandingPage", section: "Achievement" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setAchievementText(data.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTeachingSection = async () => {
    try {
      const data = await axios.post(
        `${api}content/get-content`,
        { page: "LandingPage", section: "Teaching" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setTeachingText(data.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchIndExpSection = async () => {
    try {
      const data = await axios.post(
        `${api}content/get-content`,
        { page: "LandingPage", section: "IndExp" },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setExpText(data.data.data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroSection();
    fetchTeachingSection();
    fetchIndExpSection();
  });

  const fetchCounters = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "AchievementCounter1",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounter1(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "AchievementCounter2",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounter2(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "UndergraduateCoursesTaughtCounter1",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT1(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "GraduateCoursesTaughtCounter2",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT2(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "TeachingCooperationCounter3",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT3(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "BachelorStudentsAdvisingCounter4",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT4(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "MasterStudentsAdvisingCounter5",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT5(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "DoctorateStudentsAdvisingCounter6",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setCounterT6(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "PracticalExperienceCounter1",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setINDcounter1(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "InternshipExperienceCounter2",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setINDcounter2(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "ConsultancyCounter3",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setINDcounter3(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

      axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "AwardsCounter1",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setAwardcounter1(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });


      axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "AwardsCounter2",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setAwardcounter2(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });






  };

  useEffect(() => {
    fetchCounters();
  }, []);

  const [researchText, setResearchText] = useState("");

  const fetchResearchData = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "Research",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setResearchText(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchResearchData();
  }, []);

  const [awardsText, setAwardsText] = useState("");

  const fetchAwardsText = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "Awards",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setAwardsText(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchAwardsText();
  }, []);

  const [trainingText, setTrainingText] = useState("");

  const fetchTrainingText = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "LandingPage",
        section: "Training",
      })
      .then((response) => {
        const homeData = response.data.data.content;
        setTrainingText(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchTrainingText();
  }, []);

  const [visibleAwardsCards, setVisibleAwardsCards] = useState([]);

  const fetchVisibleAwardsCards = () => {
    axios
      .post(`${api}info/get-visible-infos-by-type`, {
        type: "Award",
      })
      .then((response) => {
        const homeData = response.data.data;
        console.log(homeData)
        setVisibleAwardsCards(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchVisibleAwardsCards();
  }, []);

  const [visibleResearchCards, setVisibleResearchCards] = useState([]);

  const fetchVisibleResearchCards = () => {
    axios
      .post(`${api}info/get-visible-infos-by-type`, {
        type: "Research",
      })
      .then((response) => {
        const homeData = response.data.data;
        setVisibleResearchCards(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchVisibleResearchCards();
  }, []);

  const [visibleTrainingCards, setVisibleTrainingCards] = useState([]);

  const fetchVisibleTrainingCards = () => {
    axios
      .post(`${api}info/get-visible-infos-by-type`, {
        type: "Training",
      })
      .then((response) => {
        const homeData = response.data.data;
        console.log(homeData);
        setVisibleTrainingCards(homeData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchVisibleTrainingCards();
  }, []);

  return (
    <div className="home">
      <Helmet>
        <title>Dr. Sameer Al-Dahidi - Official Portfolio</title>
        <meta
          name="description"
          content="Welcome to Dr. Sameer Al-Dahidi's official portfolio. Explore research, achievements, and contributions in engineering and academia."
        />
        <meta
          name="keywords"
          content="Dr. Sameer Al-Dahidi,  Sameer Al-Dahidi , Dr. Sameer Dahidi, portfolio, engineering, research, academic contributions"
        />
        <link rel="canonical" href="https://sameer-aldahidi.com/" />
      </Helmet>
      <Hero />

      {/* START MY PROJECTS SECTION */}
      <div className="My_projects_container section-container">
        <Title MainTitle="Summary Of My Achievements" />
        <div className="My_projects_text">
          <MainContent>{achievementText}</MainContent>
        </div>
        <div className="countersContainer">
          <Counter
            CounterTitle="Years Experience"
            endNum={counter1}
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Member Ships"
            endNum={counter2}
            color={"rgba(51, 103, 153, 1)"}
          />
        </div>
      </div>
      {/* END MY PROJECTS SECTION */}
      {/* teaching experience +logo images */}
      <div className="My_projects_container section-container">
        <Title MainTitle="	Summary Of My Teaching Experience" />
        <div className="My_projects_text">
          <MainContent>{TeachingText}</MainContent>
        </div>
        <div className="countersContainer">
          <Counter
            CounterTitle="Undergraduate Courses Taught "
            endNum={counterT1}
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Graduate Courses Taught "
            endNum={counterT2}
            color={"rgba(51, 103, 153, 1)"}
          />
          <Counter
            CounterTitle="Teaching Cooperation "
            endNum={counterT3}
            color={"rgba(252, 128, 31, 1)"}
          />
        </div>
        <div className="countersContainer">
          <Counter
            CounterTitle="Bachelor Students Advising "
            endNum={counterT4}
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Master Students Advising "
            endNum={counterT5}
            color={"rgba(51, 103, 153, 1)"}
          />
          <Counter
            CounterTitle="Doctorate Students Advising "
            endNum={counterT6}
            color={"rgba(252, 128, 31, 1)"}
          />
        </div>
      </div>
      <div className="ProfessionalWebPages-slider">
        <div className="arrows">
          <BsArrowLeftCircleFill
            className="slider-arrow slider-arrow-left"
            onClick={prevSlide1}
          />
          <BsArrowRightCircleFill
            className="slider-arrow slider-arrow-right"
            onClick={nextSlide1}
          />
        </div>

        <div className="ProfessionalWebPages-cards1">
          {visibleCards.map((card12, idx) => (
            <div className="ProfessionalWebPages-container-card" key={idx}>
              <img
                src={card12.img}
                alt={`Card12 ${idx}`}
                className="logoImage"
              />
            </div>
          ))}
        </div>
      </div>
      {/* START MY EXPERIENCE SECTION */}
      <div className="My_projects_container section-container">
        <Title MainTitle="Summary Of My Industrial Work Experience" />
        <div className="My_projects_text">
          <MainContent>{ExpText}</MainContent>
        </div>
        <div className="countersContainer">
          <Counter
            CounterTitle="Practical Experience "
            endNum={INDcounter1}
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Internship Experience "
            endNum={INDcounter2}
            color={"rgba(51, 103, 153, 1)"}
          />
          <Counter
            CounterTitle="Consultancy"
            endNum={INDcounter3}
            color={"rgba(252, 128, 31, 1)"}
          />
        </div>
      </div>
      <div className="ProfessionalWebPages-slider">
        <div className="arrows">
          <BsArrowLeftCircleFill
            className="slider-arrow slider-arrow-left"
            onClick={prevSlide2}
          />
          <BsArrowRightCircleFill
            className="slider-arrow slider-arrow-right"
            onClick={nextSlide2}
          />
        </div>

        <div className="ProfessionalWebPages-cards1">
          {visibleCards2.map((card123, idx) => (
            <div className="ProfessionalWebPages-container-card" key={idx}>
              <img
                src={card123.img}
                alt={`Card12 ${idx}`}
                className="logoImage"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="MyExp_container section-container">
        <div className="Main-upper-text">
          <Title MainTitle="My Work Experience" />
          <Link to="/AcademicExp" className="seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>
        <div className="IndustrialExp-container  section-container">
          <div className="IndustrialExp-row">
            <div className="IndustrialExp-item IndustrialExp-title">
              RAM Expert
            </div>
            <div className="IndustrialExp-item IndustrialExp-company">
              Frieburg Company
            </div>
            <div className="IndustrialExp-item">UAE</div>
            <div className="IndustrialExp-item IndustrialExp-period">
              November 2023 – April 2024
            </div>
          </div>

          <div className="IndustrialExp-row">
            <div className="IndustrialExp-item IndustrialExp-title">
              Master Student Intern
            </div>
            <div className="IndustrialExp-item IndustrialExp-company">
              AREVA NP
            </div>
            <div className="IndustrialExp-item">Paris La Defense, France</div>
            <div className="IndustrialExp-item IndustrialExp-period">
              April 2011 – August 2011
            </div>
          </div>

          <div className="IndustrialExp-row">
            <div className="IndustrialExp-item IndustrialExp-title">
              Junior Electrical & Instruments (E&I) Engineer
            </div>
            <div className="IndustrialExp-item IndustrialExp-company">
              Consolidated Contractors International Company
            </div>
            <div className="IndustrialExp-item">Abu Dhabi</div>
            <div className="IndustrialExp-item IndustrialExp-period">
              January 2009 – May 2010
            </div>
          </div>

          <div className="IndustrialExp-row">
            <div className="IndustrialExp-item IndustrialExp-title">
              Graduate Electrical & Instruments (E&I) Engineer
            </div>
            <div className="IndustrialExp-item IndustrialExp-company">
              Kharafi National Limited Company
            </div>
            <div className="IndustrialExp-item">Kuwait</div>
            <div className="IndustrialExp-item IndustrialExp-period">
              September 2008 – December 2008
            </div>
          </div>
        </div>
      </div>
      {/* END MY EXPERIENCE SECTION */}

      {/* START RESEARCH SECTION */}
      <div className="Research-container section-container">
        <div className="Main-upper-text">
          <Title MainTitle="Research" />
          <Link to="/research" className="seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>
        <MainContent>{researchText}</MainContent>
       
        <div className="Research-container-cards">
          {visibleResearchCards.map((item) => {
            return (
              <ResearchCards
                title={item.title}
                description={item.description}
                key={item._id}
              />
            );
          })}
        </div>
      </div>
      {/* END RESEARCH SECTION */}

      {/* START AWARDS SECTION */}
      <div className="Awards-container section-container">
        <div className="Main-upper-text">
          <Title MainTitle=" Summary Of My Awards And Honors" />
          <Link to="/awards" className="seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>
        <MainContent>{awardsText}</MainContent>
        <div className="countersContainer">
          <Counter
            CounterTitle="Awards and Honors"
            endNum={AwardCounter1}
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Scholarships"
            endNum={AwardCounter2}
            color={"rgba(51, 103, 153, 1)"}
          />
          
        </div>
        <div className="Awards-container-cards">
          {visibleAwardsCards.map((item) => {
            return (
              <AwardsCards
                title={item.title}
               
                date={item.date}
                key={item._id}
                desc={item.description}
              />
            );
          })}
        </div>
      </div>
      {/* END AWARDS SECTION */}

      {/* START TRAINING SECTION */}
      <div className="Training_container section-container">
        <div className="Main-upper-text">
          <Title MainTitle="Training" />
          <Link to="/training" className="seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>
        <MainContent>{trainingText}</MainContent>
        <div className="Training-container-outer-circle">
          <div className="Training-container-inner-circle"></div>
          {visibleTrainingCards.map((item) => {
            return (
              <div className="Training-container-box" key={item._id}>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      {/* END TRAINING SECTION */}
    </div>
  );
};

export default Home;
