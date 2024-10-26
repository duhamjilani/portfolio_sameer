import React from "react";
import {
  Hero,
  MainContent,
  WorkTitle,
  Counter,
  Title,
} from "../../components/index";
import "./home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="My_projects_container section-container">
        <Title MainTitle="My Projects" />
        <div className="My_projects_text">
          <MainContent>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetraLorem ipsum dolor sit amet consectetur. Tristique
            amet sed massa nibh lectus netus in. Aliquet donec morbi convallis
            pretium. Turpis tempus pharetra
          </MainContent>
        </div>

        <div className="My_projects-counters">
          <Counter
            CounterTitle="Years Experience"
            endNum="500"
            color={"rgba(252, 128, 31, 1)"}
          />
          <Counter
            CounterTitle="Member Ships"
            endNum="800"
            color={"rgba(51, 103, 153, 1)"}
          />
        </div>
      </div>
      <div className="MyExp_container section-container">
        <div className="MyExp_text">
          <Title MainTitle="My Work Experience" />

          <Link to="/experience" className="MyExp_seeMore">
            See More <FaArrowRightLong />
          </Link>
        </div>

        <div className="work_title_container">
          <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
          <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
          <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
        </div>
      </div>
    </>
  );
};

export default Home;
