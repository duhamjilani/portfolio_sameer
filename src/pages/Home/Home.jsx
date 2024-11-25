import {React,useEffect} from "react";
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

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.2, 
  });
 
  return (
    <div className="font-Poppins">
      <Hero />

      {/* START MY PROJECTS SECTION */}
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
            <WorkTitle WorkTitle="Associate Professor" Date="February 2021 – Present" />
            <WorkTitle WorkTitle="Lorem Ipsum" Date="4-3-2001" />
            <WorkTitle WorkTitle="Lorem Ipsum" Date="4-3-2001" />
          </div>
          <div className="ExpTimeline">
            <ExpTimeline numOfCircles={3} />
          </div>
          <div className="exp_title_container">
            <ExpTitle ExpTitle="Lorem Ipsum" Desc="Mechanical and Maintenance Engineering Department, School of Applied Technical Sciences, German Jordanian University, Amman, Jordan." />
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
      {/* END RESEARCH SECTION */}

      {/* START AWARDS SECTION */}
      <div className="Awards-container section-container">
        <div className="Main-upper-text">
          <Title MainTitle="Awards" />
          <Link to="/awards" className="seeMore" >
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
      {/* END AWARDS SECTION */}

      {/* START TRAINING SECTION */}
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
      {/* END TRAINING SECTION */}
    </div>
  );
};

export default Home;
