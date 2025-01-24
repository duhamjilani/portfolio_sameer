import React from "react";
import "./ResearchCards.css";
import MainButton from "../../components/mainButton/MainButton";
import { useNavigate } from "react-router-dom";

const ResearchCards = ({ title, description, by, date }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/research");
  };
  return (
    <div className="research-container-cardHome ">
      <div className="research-card-title"> Research Name:{`${title}`} </div>
      <div className="research-card-desc">By: {`${by}`}||  <span className="card-date">{date}</span> </div>
     
      <div className="research-card-desc-containerHome">
        <div className="research-card-desc">{description}</div>
      </div>

      <MainButton title={"show details"} functionality={navigateHandler}>
        Show Details
      </MainButton>
    </div>
  );
};

export default ResearchCards;
