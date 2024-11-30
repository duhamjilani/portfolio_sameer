import { React, useState, useEffect } from "react";
import "./AcademicExp.css";
import { Title, WorkTitle } from "../../components";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";
import pic3 from "../../assets/pic3.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { api } from "../../constants/apiLink";

const images1 = [
  {
    id: 1,
    image: pic1,
    altText: "Doctor image 1",
    description: "Doctor image 1",
  },
  {
    id: 2,
    image: pic2,
    altText: "Doctor image 2",
    description: "Doctor image 2",
  },
  {
    id: 3,
    image: pic3,
    altText: "Doctor image 3",
    description: "Doctor image 3",
  },
];

const AcademicExp = () => {
  const [fullData, setFullData] = useState([]);
  const [slide, setSlide] = useState(0);
  const [showCommittess, setShowCommittess] = useState(false);
  const [showUniversity, setShowUniversity] = useState(false);
  const [showTeaching, setShowTeaching] = useState(false);
  const [showStudnetAdvising, setShowStudnetAdvising] = useState(false);
  const [showExaminationBoards, setShowExaminationBoards] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images1.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setSlide(slide === images1.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? images1.length - 1 : slide - 1);
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

  return (
    <div className="Experience-container section-container">
      <Title MainTitle=" Academic And Professional Experience" />
      <div className="expImageSlider">
        <BsArrowLeftCircleFill
          className="arrow arrow-left "
          onClick={prevSlide}
        />
        {images1.map((data, idx) => {
          return (
            <img
              src={data.image}
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
          {images1.map((_, idx) => {
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
        <div className="Experience-container-horizontal-cards font-Poppins">
          <div className="oneSectionContainer">
            <div
              className="Experience-container-horizontal-card"
              onClick={() => setShowCommittess(!showCommittess)}
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
              onClick={() => setShowUniversity(!showUniversity)}
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
              onClick={() => setShowTeaching(!showTeaching)}
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
              onClick={() => setShowStudnetAdvising(!showStudnetAdvising)}
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
              onClick={() => setShowExaminationBoards(!showExaminationBoards)}
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
