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
  const [counter8, setCounter8] = useState("");
  const [counter9, setCounter9] = useState("");
  const fetchCounters = () => {
    // Fetch data for i10IndexCounter1
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter1",
      })
      .then((response) => {
        const RCounter1 = response.data.data.content;
       
        setCounter1(RCounter1);
      })
      .catch((error) => {
        console.error("Error fetching Counter1: ", error);
      });

    // Fetch data for CitationsCounter2
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter2",
      })
      .then((response) => {
        const RCounter2 = response.data.data.content;
        setCounter2(RCounter2);
      })
      .catch((error) => {
        console.error("Error fetching CitationsCounter2: ", error);
      });

    // Fetch data for hIndexCounter3
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter3",
      })
      .then((response) => {
        const RCounter3 = response.data.data.content;
        setCounter3(RCounter3);
      })
      .catch((error) => {
        console.error("Error fetching Counter3: ", error);
      });

    // Fetch data for PermanentJournalEditorRoleCounter4
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter4",
      })
      .then((response) => {
        const RCounter4 = response.data.data.content;
        setCounter4(RCounter4);
      })
      .catch((error) => {
        console.error(
          "Error fetching Counter4: ",
          error
        );
      });

    // Fetch data for GuestEditedSpecialIssuesCounter5
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter5",
      })
      .then((response) => {
        const RCounter5 = response.data.data.content;
        setCounter5(RCounter5);
      })
      .catch((error) => {
        console.error(
          "Error fetching Counter5: ",
          error
        );
      });

    // Fetch data for RefereeingPublicationsCounter6
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter6",
      })
      .then((response) => {
        const RCounter6 = response.data.data.content;
        setCounter6(RCounter6);
      })
      .catch((error) => {
        console.error("Error fetching RefereeingPublicationsCounter6: ", error);
      });

    // Fetch data for PublicationsInHighQualityJournalsConferencesCounter7
    axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter7",
      })
      .then((response) => {
        const RCounter7 =
          response.data.data.content;
        setCounter7(RCounter7);
      })
      .catch((error) => {
        console.error(
          "Error fetching Counter7: ",
          error
        );
      });



      axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter8",
      })
      .then((response) => {
        const RCounter8 =
          response.data.data.content;
        setCounter8(RCounter8);
      })
      .catch((error) => {
        console.error(
          "Error fetching Counter7: ",
          error
        );
      });




      axios
      .post(`${api}content/get-content`, {
        page: "Research",
        section: "RCounter9",
      })
      .then((response) => {
        const RCounter9 =
          response.data.data.content;
        setCounter9(RCounter9);
      })
      .catch((error) => {
        console.error(
          "Error fetching Counter9: ",
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
      <Title MainTitle="Statistics at a Glance" />
      <div className="counters-bg">
      <div className="countersContainer ">
        <Counter
          CounterTitle="Citations"
          endNum={counter1}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        <Counter
          CounterTitle="H-index "
          endNum={counter2}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
         </div>
         <div className="countersContainer ">
        <Counter
          CounterTitle="Journal Publications  "
          endNum={counter3}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        <Counter
          CounterTitle="Conference Proceedings "
          endNum={counter4}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        <Counter
          CounterTitle="Book Chapters "
          endNum={counter5}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        </div>
        <div className="countersContainer ">
        <Counter
          CounterTitle="Guest Editor SIS"
          endNum={counter6}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        <Counter
          CounterTitle="Permanent Editor "
          endNum={counter7}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
         <Counter
          CounterTitle="TPCs at Conferences "
          endNum={counter8}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
         <Counter
          CounterTitle="Journal Reviewer"
          endNum={counter9}
          color={"rgba(252, 128, 31, 1)"}
          textColor={"white"}
        />
        </div>
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
