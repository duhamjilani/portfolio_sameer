import { React, useState, useEffect } from "react";
import "./AcademicExp.css";
import { Title, WorkTitle } from "../../components";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import axios from "axios";
import pic1 from "../../assets/pic1.jpeg";
import pic2 from "../../assets/pic2.jpeg";

import pic3 from "../../assets/pic3.jpeg";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
  const [showExpDetails, setShowExpDetails] = useState(false);
  const [pic, setPic] = useState([]);
  const [altText, setAltText] = useState("");
  const [Item, setItem] = useState([]);
  const [slide, setSlide] = useState(0);

  const fetchData = () => {
    axios
      .get("http://localhost:4003/images")
      .then((response) => {
        console.log(response.data);
        setItem(response.data);
        console.log(Item);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("Something went wrong");
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prevSlide) =>
        prevSlide === images1.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const nextSlide = () => {
    setSlide(slide === Item.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === Item.length - 1 ? 0 : slide - 1);
  };
  const toggleDetails = () => {
    setShowExpDetails(!showExpDetails);
  };
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
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">COMMITTEES</div>
          </div>
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">
              University Administrative Positions
            </div>
          </div>
          <div className="Experience-container-horizontal-card">
            <IoIosArrowDown className="arrow-icon" onClick={toggleDetails} />
            <div className="Experience-card-title">Examination Boards</div>
            {showExpDetails && (
              <div
                className={`Details-container ${showExpDetails ? "open" : ""}`}
              >
                <div className="Details-container-arrow-title">
                  <IoIosArrowUp
                    className="arrow-icon"
                    onClick={toggleDetails}
                  />
                  <div className="Experience-card-title">
                    {" "}
                    Department Committees
                  </div>
                </div>
                <div className="Experience-card-list">
                  <ul>
                    <li>
                      <div className="Experience-card-title">
                        Committee Member{" "}
                      </div>
                      <div className="card-date">
                        May 2024 – June 2024 (1 month)
                      </div>
                      <div className="Experience-list-content">
                        Evaluation of PhD Scholarship Applications at the
                        Mechanical and Maintenance Engineering Department. The
                        objective is to assess and review applications to select
                        the best candidates for a PhD scholarship opportunity
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
                    <li>
                      <div className="Experience-card-title">Experience</div>
                      <div className="card-date">1/1/2024</div>
                      <div className="Experience-list-content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus nunc, posuere in justo vulputate, bibendum
                        sodales
                      </div>
                    </li>
                    <li>
                      <div className="Experience-card-title">Experience</div>
                      <div className="card-date">1/1/2024</div>
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
      </div>
    </div>
  );
};

export default AcademicExp;
