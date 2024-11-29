import { React, useState } from "react";
import "./Research.css";
import { MainButton, Title } from "../../components";
import researchCard from "../../assets/Card6.png";
import researchPic from "../../assets/researchPic.jpeg";

const Research = () => {
  const [selectedTab, setSelectedTab] = useState("JOURNAL PUBLICATIONS");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  const showDetail = () => {
    window.open("https://doi.org/10.1016/j.solener.2022.10.048", "_blank");
  };

  const renderCards = () => {
    switch (selectedTab) {
      case "JOURNAL PUBLICATIONS":
        return (
          <>
            <div
              className="research-container-card font-Poppins"
              style={{
                backgroundImage: `url(${researchCard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="research-card-title">
                {" "}
                N. Nader, W. Al-Kouz, and S. Al-Dahidi
              </div>
              <div className="card-date">1/1/2024</div>
              <div className="research-card-desc-container">
                <div className="research-card-desc">
                  Assessment of Existing Photovoltaic System with Cooling and
                  Cleaning System: Case Study at Al-Khobar City,” Processes,
                  vol. 8, no. 1, Article ID 9, 2020.
                </div>
              </div>
              <MainButton title={"show details"} functionality={showDetail}>
                Show Details
              </MainButton>
            </div>

            <div
              className="research-container-card font-Poppins"
              style={{
                backgroundImage: `url(${researchCard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="research-card-title">
                {" "}
                N. Nader, W. Al-Kouz, and S. Al-Dahidi
              </div>
              <div className="research-card-desc-container">
                <div className="research-card-desc">
                  Assessment of Existing Photovoltaic System with Cooling and
                  Cleaning System: Case Study at Al-Khobar City,” Processes,
                  vol. 8, no. 1, Article ID 9, 2020.
                </div>
              </div>
              <MainButton title={"show details"} functionality={showDetail}>
                Show Details
              </MainButton>
            </div>
            <div
              className="research-container-card font-Poppins"
              style={{
                backgroundImage: `url(${researchCard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="research-card-title">
                {" "}
                N. Nader, W. Al-Kouz, and S. Al-Dahidi
              </div>
              <div className="research-card-desc-container">
                <div className="research-card-desc">
                  Assessment of Existing Photovoltaic System with Cooling and
                  Cleaning System: Case Study at Al-Khobar City,” Processes,
                  vol. 8, no. 1, Article ID 9, 2020.
                </div>
              </div>
              <MainButton title={"show details"} functionality={showDetail}>
                Show Details
              </MainButton>
            </div>

            <div
              className="research-container-card font-Poppins"
              style={{
                backgroundImage: `url(${researchCard})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="research-card-title">
                {" "}
                N. Nader, W. Al-Kouz, and S. Al-Dahidi
              </div>
              <div className="research-card-desc-container">
                <div className="research-card-desc">
                  Assessment of Existing Photovoltaic System with Cooling and
                  Cleaning System: Case Study at Al-Khobar City,” Processes,
                  vol. 8, no. 1, Article ID 9, 2020.
                </div>
              </div>
              <MainButton title={"show details"} functionality={showDetail}>
                Show Details
              </MainButton>
            </div>
          </>
        );
      case "CONFERENCE PUBLICATIONS":
        return (
          <div
            className="research-container-card font-Poppins"
            style={{
              backgroundImage: `url(${researchCard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="research-card-title">Conference Title</div>
            <div className="research-card-desc-container">
              <div className="research-card-desc">
                Conference-specific description goes here.
              </div>
            </div>
            <MainButton title={"show details"} functionality={showDetail}>
              Show Details
            </MainButton>
          </div>
        );
      case "OTHER PUBLICATIONS":
        return (
          <div
            className="research-container-card font-Poppins"
            style={{
              backgroundImage: `url(${researchCard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="research-card-title">OTHER Title</div>
            <div className="research-card-desc-container">
              <div className="research-card-desc">
                Conference-specific description goes here.
              </div>
            </div>
            <MainButton title={"show details"} functionality={showDetail}>
              Show Details
            </MainButton>
          </div>
        );
      case "BOOK CHAPTER PUBLICATIONS":
        return (
          <div
            className="research-container-card font-Poppins"
            style={{
              backgroundImage: `url(${researchCard})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="research-card-title">BOOK CHAPTER Title</div>
            <div className="research-card-desc-container">
              <div className="research-card-desc">
                Conference-specific description goes here.
              </div>
            </div>
            <MainButton title={"show details"} functionality={showDetail}>
              Show Details
            </MainButton>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="research-container section-container">
      <Title MainTitle="Research" />
      <div className="banner-container">
        <img src={researchPic} alt="img" className="banner-Image" />
      </div>
      <div className="btns-container">
        <MainButton
          functionality={() => handleTabClick("JOURNAL PUBLICATIONS")}
          IsTab={true}
          isActive={selectedTab === "JOURNAL PUBLICATIONS"}
        >
          JOURNAL
        </MainButton>
        <MainButton
          functionality={() => handleTabClick("CONFERENCE PUBLICATIONS")}
          IsTab={true}
          isActive={selectedTab === "CONFERENCE PUBLICATIONS "}
        >
          CONFERENCE
        </MainButton>
        <MainButton
          functionality={() => handleTabClick("BOOK CHAPTER PUBLICATIONS")}
          IsTab={true}
          isActive={selectedTab === "BOOK CHAPTER PUBLICATIONS"}
        >
          BOOK CHAPTER
        </MainButton>
        <MainButton
          functionality={() => handleTabClick("OTHER PUBLICATIONS")}
          IsTab={true}
          isActive={selectedTab === "OTHER PUBLICATIONS "}
        >
          OTHER
        </MainButton>
      </div>
      <div className="research-container-cards">{renderCards()}</div>
    </div>
  );
};

export default Research;
