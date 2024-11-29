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

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
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
        // alert("Something went wrong while fetching data.");
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
        // alert("Something went wrong while fetching data.");
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
        // alert("Something went wrong while fetching data.");
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
        // alert("Something went wrong while fetching data.");
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
        // alert("Something went wrong while fetching data.");
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
        console.log(response);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // alert("Something went wrong while fetching data.");
      });
  };

  useEffect(() => {
    fetchVisibleAwardsCards();
  }, []);

  return (
    <div className="font-Poppins">
      <Hero />

      {/* START MY PROJECTS SECTION */}
      <div className="My_projects_container section-container">
        <Title MainTitle="My Achievements" />
        <div className="My_projects_text">
          <MainContent>{achievementText}</MainContent>
        </div>
        <div className="My_projects-counters">
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
        <div className="MyExp_small_container">
          <div className="work_title_container">
            <WorkTitle
              WorkTitle="Associate Professor"
              Date="February 2021 – Present"
            />
            <WorkTitle WorkTitle="Lorem Ipsum" Date="4-3-2001" />
            <WorkTitle WorkTitle="Lorem Ipsum" Date="4-3-2001" />
          </div>
          <div className="ExpTimeline">
            <ExpTimeline numOfCircles={3} />
          </div>
          <div className="exp_title_container">
            <ExpTitle
              ExpTitle="Lorem Ipsum"
              Desc="Mechanical and Maintenance Engineering Department, School of Applied Technical Sciences, German Jordanian University, Amman, Jordan."
            />
            <ExpTitle ExpTitle="Lorem Ipsum" Desc="Description goes here." />
            <ExpTitle ExpTitle="Lorem Ipsum" Desc="Description goes here." />
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
          <ResearchCards />
          <ResearchCards />
          <ResearchCards />
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
          <div className="Training-container-box top">Text</div>
          <div className="Training-container-box top-left">Text</div>
          <div className="Training-container-box left">Text</div>
          <div className="Training-container-box left2">Text</div>
          <div className="Training-container-box bottom-left">Text</div>
          <div className="Training-container-box bottom">Text</div>
          <div className="Training-container-box bottom-right">Text</div>
          <div className="Training-container-box right">Text</div>
          <div className="Training-container-box right2">Text</div>
          <div className="Training-container-box top-right">Text</div>
        </div>
      </div>
      {/* END TRAINING SECTION */}
    </div>
  );
};

export default Home;
