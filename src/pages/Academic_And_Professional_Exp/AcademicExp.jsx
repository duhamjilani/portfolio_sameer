import { React, useState, useEffect } from "react";
import "./AcademicExp.css";
import { Title, WorkTitle } from "../../components";
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

  useEffect(() => {
    fetchAllData();
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
