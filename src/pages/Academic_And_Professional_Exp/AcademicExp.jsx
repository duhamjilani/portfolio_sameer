import { React, useState, useEffect } from "react";
import "./AcademicExp.css";
import { Title, WorkTitle, Counter } from "../../components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import exp1 from "../../assets/exp1.jpeg";
import exp2 from "../../assets/exp2.jpeg";
import exp3 from "../../assets/exp3.jpeg";
import exp4 from "../../assets/exp4.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { api } from "../../constants/apiLink";
import { Helmet } from "react-helmet-async";

const AcademicExp = () => {
  const [fullData, setFullData] = useState([]);
  const [slide, setSlide] = useState(0);
  const [showCommittess, setShowCommittess] = useState(false);
  const [showUniversity, setShowUniversity] = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);
  const [showStudnetAdvising, setShowStudnetAdvising] = useState(false);
  const [showExaminationBoards, setShowExaminationBoards] = useState(false);
  const [images, setImages] = useState([]);
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
  const [counter3, setCounter3] = useState("");
  const [counter4, setCounter4] = useState("");
  const [counter5, setCounter5] = useState("");
  const [counter6, setCounter6] = useState("");
  const [counter7, setCounter7] = useState("");
  const [counter8, setCounter8] = useState("");
  const [counter9, setCounter9] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/academic`);
        console.log(response);
        if (response.data.images) {
          setImages(response.data.images);
        }
      } catch (error) {
        console.error("Error fetching the latest image:", error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const nextSlide = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  const fetchAllData = async () => {
    try {
      const data = await axios.post(`${api}info/get-infos-by-type`, {
        type: "Experience",
      });

      setFullData(data.data.data);
      console.log(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCounters = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter1",
      })
      .then((response) => {
        const AcademicCounter1 = response.data.data.content;
        setCounter1(AcademicCounter1);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter2",
      })
      .then((response) => {
        const AcademicCounter2 = response.data.data.content;
        setCounter2(AcademicCounter2);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter3",
      })
      .then((response) => {
        const AcademicCounter3 = response.data.data.content;
        setCounter3(AcademicCounter3);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter4",
      })
      .then((response) => {
        const AcademicCounter4 = response.data.data.content;
        setCounter4(AcademicCounter4);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter5",
      })
      .then((response) => {
        const AcademicCounter5 = response.data.data.content;
        setCounter5(AcademicCounter5);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter6",
      })
      .then((response) => {
        const AcademicCounter6 = response.data.data.content;
        setCounter6(AcademicCounter6);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter7",
      })
      .then((response) => {
        const AcademicCounter7 = response.data.data.content;
        setCounter7(AcademicCounter7);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter8",
      })
      .then((response) => {
        const AcademicCounter8 = response.data.data.content;
        setCounter8(AcademicCounter8);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "academic",
        section: "AcademicCounter9",
      })
      .then((response) => {
        const AcademicCounter9 = response.data.data.content;
        setCounter9(AcademicCounter9);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  useEffect(() => {
    fetchAllData();
    fetchCounters();
  }, []);
  const closeAll = () => {
    setShowCommittess(false);
    setShowExaminationBoards(false);
    setShowStudnetAdvising(false);
    setShowTeaching(false);
    setShowUniversity(false);
  };

  return (
    <div className="Experience-container section-container">
      <Helmet>
        <title>Academic & Professional Experience - Dr. Sameer Al-Dahidi</title>
        <meta
          name="description"
          content="Learn about the academic and professional journey of Dr. Sameer Al-Dahidi, including teaching, research, and leadership roles."
        />
        <meta
          name="keywords"
          content="academic experience, professional experience, teaching, research, Dr. Sameer Al-Dahidi, professor , Sameer Al-Dahidi , Dr. Sameer Dahidi"
        />
        <link rel="canonical" href="https://sameer-aldahidi.com/academicExp" />
      </Helmet>

      <Title MainTitle=" Academic And Professional Experience" />
      <div className="expImageSlider">
        <BsArrowLeftCircleFill
          className="arrow arrow-left "
          onClick={prevSlide}
        />
        {images.map((data, idx) => {
          return (
            <img
              src={data.path}
              alt={data.altText}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <BsArrowRightCircleFill
          className="arrow arrow-right "
          onClick={nextSlide}
        />
        <span className="indicators">
          {images.map((_, idx) => {
            return (
              <button
                key={idx}
                onClick={() => setSlide(idx)}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
              ></button>
            );
          })}
        </span>
      </div>
      <Title MainTitle="Statistics At A Glance" />
      <div className="counters-bg">
        <div className="countersContainer">
          <Counter
            CounterTitle="Undergraduate Courses Taught "
            endNum={counter1}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
          <Counter
            CounterTitle="Graduate Courses Taught "
            endNum={counter2}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />

          <Counter
            CounterTitle="Teaching Cooperation"
            endNum={counter3}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
        </div>

        <div className="countersContainer">
          <Counter
            CounterTitle="Bachelor Students Advising "
            endNum={counter4}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
          <Counter
            CounterTitle="Master Students Advising "
            endNum={counter5}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />

          <Counter
            CounterTitle="Doctorate Students Advising"
            endNum={counter6}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
        </div>

        <div className="countersContainer">
          <Counter
            CounterTitle="Committees"
            endNum={counter7}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
          <Counter
            CounterTitle="Admin Positions "
            endNum={counter8}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />

          <Counter
            CounterTitle="Examination Boards"
            endNum={counter9}
            color={"rgba(252, 128, 31, 1)"}
            textColor={"white"}
          />
        </div>
      </div>

      <div className="Experience-container expSecondSection">
        <div className="Experience-container-horizontal-cards ">
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => {
                closeAll();
                setShowCommittess(!showCommittess);
              }}
            >
              <IoIosArrowDown
                className={showCommittess ? "arrow-open" : "arrow-icon"}
              />
              <div className="Experience-card-title">COMMITTEES</div>
            </div>
            {showCommittess && (
              <div className={`Details-container`}>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">
                        Department Committees
                      </div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Committees" &&
                                item.subCategory === "Department"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">
                        School Committees
                      </div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Committees" &&
                                item.subCategory === "School"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">
                        University Committees
                      </div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Committees" &&
                                item.subCategory === "University"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">
                        International Committees
                      </div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Committees" &&
                                item.subCategory === "International"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => {
                closeAll();
                setShowUniversity(!showUniversity);
              }}
            >
              <IoIosArrowDown
                className={showUniversity ? "arrow-open" : "arrow-icon"}
              />
              <div className="Experience-card-title">
                University Administrative Positions
              </div>
            </div>
            {showUniversity && (
              <div className={`Details-container`}>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category ===
                                "University Administrative Position"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => {
                closeAll();
                setShowTeaching(!showTeaching);
              }}
            >
              <IoIosArrowDown
                className={showTeaching ? "arrow-open" : "arrow-icon"}
              />
              <div className="Experience-card-title">Teaching</div>
            </div>
            {showTeaching && (
              <div className={`Details-container`}>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">PHD</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Teaching" &&
                                item.subCategory === "PHD"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Master</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Teaching" &&
                                item.subCategory === "Master"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Bachelor</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Teaching" &&
                                item.subCategory === "Bachelor"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Industrial</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Teaching" &&
                                item.subCategory === "Industrial"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => {
                closeAll();
                setShowStudnetAdvising(!showStudnetAdvising);
              }}
            >
              <IoIosArrowDown
                className={showStudnetAdvising ? "arrow-open" : "arrow-icon"}
              />
              <div className="Experience-card-title">Students Advising</div>
            </div>
            {showStudnetAdvising && (
              <div className={`Details-container`}>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">PHD</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Student Advising" &&
                                item.subCategory === "PHD"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Master</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Student Advising" &&
                                item.subCategory === "Master"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Bachelor</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Student Advising" &&
                                item.subCategory === "Bachelor"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => {
                closeAll();
                setShowExaminationBoards(!showExaminationBoards);
              }}
            >
              <IoIosArrowDown
                className={showExaminationBoards ? "arrow-open" : "arrow-icon"}
              />
              <div className="Experience-card-title">Examination Boards</div>
            </div>
            {showExaminationBoards && (
              <div className={`Details-container`}>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">PHD</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Examination Boards" &&
                                item.subCategory === "PHD"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Master</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Examination Boards" &&
                                item.subCategory === "Master"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                    <li className="div4">
                      <div className="Experience-card-title">Bachelor</div>
                      <div className="Experience-card-list-content">
                        <ul>
                          {fullData
                            .filter(
                              (item) =>
                                item.category === "Examination Boards" &&
                                item.subCategory === "Bachelor"
                            )
                            .map((item) => {
                              return (
                                <li>
                                  <div className="Experience-card-title">
                                    {item.title}
                                  </div>
                                  <div className="card-date">{item.date}</div>
                                  <div className="Experience-list-content">
                                    {item.description}
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicExp;
