import { React, useState } from "react";
import "./Experience.css";
import { Title, WorkTitle } from "../../components";
import ExpTimeline from "../../components/ExpTimeline/ExpTimeline";
import ExpTitle from "../../components/ExpTitle/ExpTitle";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Experience = () => {
  const [showExpDetails, setShowExpDetails] = useState(false);

  const toggleDetails = () => {
    setShowExpDetails(!showExpDetails);
  };

  return (
    <div className="Experience-container section-container">
      <Title MainTitle="Journey Of Experience" />
      <div className="MyExp_small_container">
        <div className="work_title_container">
          <WorkTitle WorkTitle="Title work" Date="4-3-2001" />
          <WorkTitle WorkTitle="Title work" Date="4-3-2001" />
          <WorkTitle WorkTitle="Title work" Date="4-3-2001" />
        </div>
        <div className="ExpTimeline">
          <ExpTimeline numOfCircles={5} />
        </div>
        <div className="exp_title_container">
          <ExpTitle ExpTitle="Experience" Desc="frl.fcgkvtrm.trbm" />
          <ExpTitle ExpTitle="Experience" Desc="frl.fcgkvtrm.trbm" />
          <ExpTitle ExpTitle="Experience" Desc="frl.fcgkvtrm.trbm" />
        </div>
      </div>
      {/* <div className="Experience-container secondSection">
        <Title MainTitle="Experience" />
        <div className="Experience-container-horizontal-cards font-Poppins">
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">Title</div>
          </div>
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">Title</div>
          </div>
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">Title</div>
            {showExpDetails && (
              <div
                className={`Details-container ${showExpDetails ? "open" : ""}`}
              >
                <div className="Details-container-arrow-title">
                  <IoIosArrowUp
                    className="arrow-icon"
                    onClick={toggleDetails}
                  />
                  <div className="Experience-card-title">Title</div>
                </div>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">Experience</div>

                      <div className="Experience-list-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus nunc, posuere in justo vulputate, bibendum
                        sodales
                      </div>
                    </li>
                    <li>
                      <div className="Experience-card-title">Experience</div>

                      <div className="Experience-list-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus nunc, posuere in justo vulputate, bibendum
                        sodales
                      </div>
                    </li>
                    <li>
                      <div className="Experience-card-title">Experience</div>
                      <div className="Experience-list-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus nunc, posuere in justo vulputate, bibendum
                        sodales
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Experience;
