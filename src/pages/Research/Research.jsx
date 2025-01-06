import { React, useEffect, useState } from "react";
import "./Research.css";
import { MainButton, Title, Counter } from "../../components";
import researchCard from "../../assets/Card6.png";
import researchPic from "../../assets/researchPic.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";
import { Helmet } from 'react-helmet-async';

const Research = () => {
  const [selectedTab, setSelectedTab] = useState("Journal");
  const [researches, setResearches] = useState([]);
  const [ImageSrc, setImageSrc] = useState("");
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
  const [counter3, setCounter3] = useState("");
  const [counter4, setCounter4] = useState("");
  const [counter5, setCounter5] = useState("");
  const [counter6, setCounter6] = useState("");
  const [counter7, setCounter7] = useState("");
  const fetchCounters = () => {
    // Fetch data for i10IndexCounter1
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "i10IndexCounter1",
      })
      .then((response) => {
        const i10IndexCounter1 = response.data.data.content;
       
        setCounter1(i10IndexCounter1);
      })
      .catch((error) => {
        console.error("Error fetching i10IndexCounter1: ", error);
      });

    // Fetch data for CitationsCounter2
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "CitationsCounter2",
      })
      .then((response) => {
        const CitationsCounter2 = response.data.data.content;
        setCounter2(CitationsCounter2);
      })
      .catch((error) => {
        console.error("Error fetching CitationsCounter2: ", error);
      });

    // Fetch data for hIndexCounter3
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "hIndexCounter3",
      })
      .then((response) => {
        const hIndexCounter3 = response.data.data.content;
        setCounter3(hIndexCounter3);
      })
      .catch((error) => {
        console.error("Error fetching hIndexCounter3: ", error);
      });

    // Fetch data for PermanentJournalEditorRoleCounter4
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "PermanentJournalEditorRoleCounter4",
      })
      .then((response) => {
        const PermanentJournalEditorRoleCounter4 = response.data.data.content;
        setCounter4(PermanentJournalEditorRoleCounter4);
      })
      .catch((error) => {
        console.error(
          "Error fetching PermanentJournalEditorRoleCounter4: ",
          error
        );
      });

    // Fetch data for GuestEditedSpecialIssuesCounter5
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RefereeingPublicationsCounter5",
      })
      .then((response) => {
        const GuestEditedSpecialIssuesCounter5 = response.data.data.content;
        setCounter5(GuestEditedSpecialIssuesCounter5);
      })
      .catch((error) => {
        console.error(
          "Error fetching GuestEditedSpecialIssuesCounter5: ",
          error
        );
      });

    // Fetch data for RefereeingPublicationsCounter6
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "GuestEditedSpecialIssuesCounter6",
      })
      .then((response) => {
        const RefereeingPublicationsCounter6 = response.data.data.content;
        setCounter6(RefereeingPublicationsCounter6);
      })
      .catch((error) => {
        console.error("Error fetching RefereeingPublicationsCounter6: ", error);
      });

    // Fetch data for PublicationsInHighQualityJournalsConferencesCounter7
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "PublicationsInHighQualityJournalsConferencesCounter7",
      })
      .then((response) => {
        const PublicationsInHighQualityJournalsConferencesCounter7 =
          response.data.data.content;
        setCounter7(PublicationsInHighQualityJournalsConferencesCounter7);
      })
      .catch((error) => {
        console.error(
          "Error fetching PublicationsInHighQualityJournalsConferencesCounter7: ",
          error
        );
      });
  };





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
    fetchCounters();
  }, []);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/research`);
       
        if (response.data.images) {
          setImageSrc(`${response.data.images[0].path}`);
        }
      } catch (error) {
        console.error("Error fetching the latest image:", error);
      }
    };

    fetchImage();
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
                  >
                    <div className="research-card-title">{`Research Name : ${item.title}`}</div>
                    <div className="research-card-desc">
                      {`By : ${item.by}`} ||{" "}
                      <span className="card-date">{item.date}</span>
                    </div>

                    <div className="research-card-desc">
                      {`Journal : ${item.description}`}
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
                  >
                    <div className="research-card-title">{`Conference Name : ${item.title}`}</div>
                    <div className="research-card-desc">
                      {` By : ${item.by}`}||{" "}
                      <span className="card-date">{item.date}</span>
                    </div>

                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {`Conference: ${item.description}`}
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
                  >
                    <div className="research-card-title">{item.title}</div>
                    <div className="research-card-desc">
                      {` By:${item.by}`}||{" "}
                      <span className="card-date">{item.date}</span>
                    </div>

                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {`Other: ${item.description}`}
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
                  >
                    <div className="research-card-title">{`Book Chapter : ${item.title}`}</div>
                    <div className="research-card-desc">
                      {` By:${item.by}`}{" "}
                      <span className="card-date">{item.date}</span>
                    </div>

                    <div className="research-card-desc-container">
                      <div className="research-card-desc">
                        {`Book Chapter: ${item.description}`}
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
      <Helmet>
  <title>Research by Dr. Sameer Al-Dahidi</title>
  <meta name="description" content="Explore Dr. Sameer Al-Dahidi's groundbreaking research in engineering, renewable energy, and technology." />
  <meta name="keywords" content="Dr. Sameer Al-Dahidi, research, engineering, renewable energy, technology" />
  <link rel="canonical" href="https://sameer-aldahidi.com/research" />
</Helmet>
      <Title MainTitle="Research" />
      <div className="banner-container">
        <img src={ImageSrc} alt="img" className="banner-Image" />
      </div>
      <Title MainTitle="My Research" />
      <div className="countersContainer researchCounter">
        <Counter
          CounterTitle="i-10 Index (Dec 2024)"
          endNum={counter1}
          color={"rgba(252, 128, 31, 1)"}
        />
        <Counter
          CounterTitle="Citations (Dec 2024)"
          endNum={counter2}
          color={"rgba(51, 103, 153, 1)"}
        />
        <Counter
          CounterTitle="h-index (Scopus, Dec 2024)"
          endNum={counter3}
          color={"rgba(252, 128, 31, 1)"}
        />
        <Counter
          CounterTitle="Permanent Journal Editor Role"
          endNum={counter4}
          color={"rgba(51, 103, 153, 1)"}
        />
        <Counter
          CounterTitle="Guest-Edited Special Issues"
          endNum={counter5}
          color={"rgba(252, 128, 31, 1)"}
        />
        <Counter
          CounterTitle="Refereeing Publications"
          endNum={counter6}
          color={"rgba(51, 103, 153, 1)"}
        />
        <Counter
          CounterTitle="Publications in High-Quality Journals & Conferences"
          endNum={counter7}
          color={"rgba(252, 128, 31, 1)"}
        />
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
