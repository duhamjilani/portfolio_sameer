// Training.js
import React, { useEffect, useState } from "react";
import "./Training.css";
import { Title, Counter } from "../../components";
import trainingPic from "../../assets/training-pic.png";
import trainingPic2 from "../../assets/trainingPic.jpeg";
import TrainingIcon from "../../assets/analysis.png";
import axios from "axios";
import { api } from "../../constants/apiLink";
import { Helmet } from 'react-helmet-async';

const Training = () => {
  const [ImageSrc, setImageSrc] = useState("");
  const [cards, setCards] = useState([]);
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");

  const fetchData = async () => {
    try {
      const data = await axios.post(`${api}info/get-infos-by-type`, {
        type: "Training",
      });

      setCards(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCounters = () => {
    axios
      .post(`${api}content/get-content`, {
        page: "Training",
        section: "TaughtCoursesCounter1",
      })
      .then((response) => {
        const TaughtCourses = response.data.data.content;
        setCounter1(TaughtCourses);
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    axios
      .post(`${api}content/get-content`, {
        page: "Training",
        section: "SupervisedCoSupervisedThesesCounter2",
      })
      .then((response) => {
        const SupervisedCoSupervisedTheses = response.data.data.content;
        setCounter2(SupervisedCoSupervisedTheses);
        console.log(counter2)
       
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };




  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/training`);
        console.log(response);
        if (response.data.images) {
          setImageSrc(`${response.data.images[0].path}`);
        }
      } catch (error) {
        console.error("Error fetching the latest image:", error);
      }
    };

    fetchImage();
  }, []);

  useEffect(() => {
    fetchData();
    fetchCounters()
  }, []);

  return (
    <div className="TrainingAndMembership-container section-container font-Poppins">
      <Helmet>
  <title>Training & Certifications - Dr. Sameer Al-Dahidi</title>
  <meta
    name="description"
    content="Discover the training programs, certifications, and workshops completed by Dr. Sameer Al-Dahidi to stay updated with industry trends and Explore the professional memberships of Dr. Sameer Al-Dahidi, including affiliations with esteemed organizations and societies."
  />
  <meta
    name="keywords"
    content="training, certifications, workshops, Dr. Sameer Al-Dahidi, skill development, professional growth  professional societies, organizations"
  />
  <link rel="canonical" href="https://sameer-aldahidi.com/training" />
</Helmet>

      <Title MainTitle="Training And Memberships" />
      <div className="banner-container">
        <img src={ImageSrc} alt="img" className="banner-Image" />
      </div>
      <Title MainTitle="Trainings" />
      <div className="countersContainer">
        <Counter
          CounterTitle="Taught Courses at All Levels"
          endNum={counter1}
          color={"rgba(252, 128, 31, 1)"}
        />
        <Counter
          CounterTitle="Supervised & Co-supervised Theses"
          endNum={counter2}
          color={"rgba(51, 103, 153, 1)"}
        />
      </div>
      <div className="TrainingAndMembership-cards">
        {cards.map((item) => {
          return (
            <div className="TrainingAndMembership-card" key={item._id}>
              <img src={TrainingIcon} className="trainingPic" alt="pic" />
              <div className="card-content">
                <div className="card-title">{item.title}</div>
                <div className="card-date">{item.date}</div>
                <div className="card-text ">{item.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Training;
