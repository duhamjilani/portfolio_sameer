// Training.js
import React, { useEffect, useState } from "react";
import "./Training.css";
import { Title } from "../../components";
import trainingPic from "../../assets/training-pic.png";
import trainingPic2 from "../../assets/trainingPic.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";

const Training = () => {
  const [cards, setCards] = useState([]);

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="TrainingAndMembership-container section-container font-Poppins">
      <Title MainTitle="Training And Memberships" />
      <div className="banner-container">
        <img src={trainingPic2} alt="img" className="banner-Image" />
      </div>
      <div className="TrainingAndMembership-cards">
        {cards.map((item) => {
          return (
            <div className="TrainingAndMembership-card" key={item._id}>
              <img src={trainingPic} className="trainingPic" alt="pic" />
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
