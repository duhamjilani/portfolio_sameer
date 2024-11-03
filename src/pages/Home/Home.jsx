import React from "react";
import {
  Hero,
  MainContent,
  WorkTitle,
  Counter,
  Title,
  AwardsCards,
  ResearchCards,
} from "../../components/index";
import "./home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import ExpTitle from "../../components/ExpTitle/ExpTitle";
import ExpTimeline from "../../components/ExpTimeline/ExpTimeline";

const Home = () => {
  return (
    <div className="font-Poppins">
      <Hero />
     {/* START MY PROJECTS SECTION */}

{/* 
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
      endNum="6"
      color={"rgba(51, 103, 153, 1)"}
    />
  </div>
</div>
*/}

{/* END OF MY PROJECTS SECTION */}

{/* START MY EXPERIENCE SECTION */}

{/* 
<div className="MyExp_container section-container">
  <div className="Main-upper-text">
    <Title MainTitle="My Work Experience" />
    <Link to="/experience" className="seeMore ">
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
*/}

{/* END OF MY EXPERIENCE SECTION */}

{/* START RESEARCH SECTION */}

{/* 
<div className="Research-container section-container">
  <div className="Main-upper-text">
    <Title MainTitle="Research" />
    <Link to="/research" className="seeMore">
      See More <FaArrowRightLong />
    </Link>
  </div>
  <MainContent>
    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
    lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
    pharetraLorem ipsum dolor sit amet consectetur. Tristique amet sed
    massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
    Turpis tempus pharetra
  </MainContent>
  <div className="Research-container-cards">
    <ResearchCards />
    <ResearchCards />
    <ResearchCards />
  </div>
</div>
*/}

{/* END OF RESEARCH SECTION */}

{/* START AWARDS SECTION */}

{/* 
<div className="Awards-container section-container">
  <div className="Main-upper-text">
    <Title MainTitle="Awards" />
    <Link to="/awards" className="seeMore">
      See More <FaArrowRightLong />
    </Link>
  </div>
  <MainContent>
    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
    lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
    pharetraLorem ipsum dolor sit amet consectetur. Tristique amet sed
    massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
    Turpis tempus pharetra
  </MainContent>
  <div className="Awards-container-cards">
    <AwardsCards />
    <AwardsCards />
    <AwardsCards />
    <AwardsCards />
  </div>
</div>
*/}

{/* END OF AWARDS SECTION */}

{/* START TRAINING SECTION */}

{/* 
<div className="Training_container section-container">
  <div className="Main-upper-text">
    <Title MainTitle="Training" />
    <Link to="/training" className="seeMore">
      See More <FaArrowRightLong />
    </Link>
  </div>
  <MainContent>
    Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
    lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus
    pharetraLorem ipsum dolor sit amet consectetur. Tristique amet sed
    massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
    Turpis tempus pharetra
  </MainContent>
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
*/}

{/* END TRAINING SECTION */}

    </div>
  );
};

export default Home;
