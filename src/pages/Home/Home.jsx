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

const Home = () => {
  const [achievementText, setAchievementText] = useState("");
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");

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

  useEffect(() => {
    fetchHeroSection();
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
    <div>
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

      {/* START MY EXPERIENCE SECTION */}
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
              <div className="IndustrialExp-item">
                UAE
              </div>
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
              <div className="IndustrialExp-item">
              Paris La Defense, France
              </div>
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
              <div className="IndustrialExp-item">
                 Abu Dhabi 
              </div>
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
              <div className="IndustrialExp-item">
              Kuwait
              </div>
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
          <Title MainTitle="Awards" />
          <Link to="/awards" className="seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>
        <MainContent>{awardsText}</MainContent>
        <div className="Awards-container-cards">
          {visibleAwardsCards.map((item) => {
            return (
              <AwardsCards
                title={item.title}
                desc={item.desc}
                date={item.date}
                key={item._id}
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
