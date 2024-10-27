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
import ExpTitle from "../../components/ExpTitle/ExpTitle";
import ExpTimeline from "../../components/ExpTimeline/ExpTimeline";

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
            endNum="11"
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
        <div className="MyExp_small_container">
          <div className="work_title_container">
            <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
            <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
            <WorkTitle WorkTitle="lorem lorem" Date="4-3-2001" />
          </div>
          <div className="ExpTimeline">
            <ExpTimeline numOfCircles={3} />
          </div>
          <div className="exp_title_container">
            <ExpTitle ExpTitle="lorem lorem" Desc="frl.fcgkvtrm.trbm" />
            <ExpTitle ExpTitle="lorem lorem" Desc="frl.fcgkvtrm.trbm" />
            <ExpTitle ExpTitle="lorem lorem" Desc="frl.fcgkvtrm.trbm" />
          </div>
        </div>
      </div>
      <div className="Training_container section-container">
        <Title MainTitle="Training" />

        <div className="Training-container-outer-circle">
  <div className="Training-container-inner-circle"></div>
  
  <div className="Training-container-box top">Text</div>
  <div className="Training-container-box top-left">Text</div>
  <div className="Training-container-box left">Text</div>
  <div className="Training-container-box bottom-left">Text</div>
  <div className="Training-container-box bottom">Text</div>
  <div className="Training-container-box bottom-right">Text</div>
  <div className="Training-container-box right">Text</div>
  <div className="Training-container-box top-right">Text</div>
</div>

      </div>
    </>
  );
};

export default Home;
