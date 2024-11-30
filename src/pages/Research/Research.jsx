import { React, useEffect, useState } from "react";
import "./Research.css";
import { MainButton, Title } from "../../components";
import researchCard from "../../assets/Card6.png";
import researchPic from "../../assets/researchPic.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";

const Research = () => {
  const [selectedTab, setSelectedTab] = useState("Journal");
  const [researches, setResearches] = useState([]);

  const fetchData = async () => {
    try {
      const data = await axios.post(`${api}info/get-infos-by-type`, {
        type: "Research",
      });
      setResearches(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };
  const showDetail = (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCards = () => {
    switch (selectedTab) {
      case "Journal":
        return (
          <>
            {researches
              .filter((item) => item.category === "Journal")
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className="research-container-card font-Poppins"
                    style={{
                      backgroundImage: `url(${researchCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="research-card-title">{item.title}</div>
                    <div className="card-date">{item.date}</div>
                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {item.description}
                      </div>
                    </div>
                    <MainButton
                      title={"show details"}
                      functionality={() => showDetail(item.link)}
                    >
                      Show Details
                    </MainButton>
                  </div>
                );
              })}
          </>
        );
      case "CONFERENCE PUBLICATIONS":
        return (
          <>
            {researches
              .filter((item) => item.category === "Conference")
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className="research-container-card font-Poppins"
                    style={{
                      backgroundImage: `url(${researchCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="research-card-title">{item.title}</div>
                    <div className="card-date">{item.date}</div>
                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {item.description}
                      </div>
                    </div>
                    <MainButton
                      title={"show details"}
                      functionality={() => showDetail(item.link)}
                    >
                      Show Details
                    </MainButton>
                  </div>
                );
              })}
          </>
        );
      case "OTHER PUBLICATIONS":
        return (
          <>
            {researches
              .filter((item) => item.category === "Other")
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className="research-container-card font-Poppins"
                    style={{
                      backgroundImage: `url(${researchCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="research-card-title">{item.title}</div>
                    <div className="card-date">{item.date}</div>
                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {item.description}
                      </div>
                    </div>
                    <MainButton
                      title={"show details"}
                      functionality={() => showDetail(item.link)}
                    >
                      Show Details
                    </MainButton>
                  </div>
                );
              })}
          </>
        );
      case "BOOK CHAPTER PUBLICATIONS":
        return (
          <>
            {researches
              .filter((item) => item.category === "Book")
              .map((item) => {
                return (
                  <div
                    key={item._id}
                    className="research-container-card font-Poppins"
                    style={{
                      backgroundImage: `url(${researchCard})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="research-card-title">{item.title}</div>
                    <div className="card-date">{item.date}</div>
                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {item.description}
                      </div>
                    </div>
                    <MainButton
                      title={"show details"}
                      functionality={() => showDetail(item.link)}
                    >
                      Show Details
                    </MainButton>
                  </div>
                );
              })}
          </>
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
          functionality={() => handleTabClick("Journal")}
          IsTab={true}
          isActive={selectedTab === "Journal"}
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
