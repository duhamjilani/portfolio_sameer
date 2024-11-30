import React from "react";
import "./ResearchCards.css";
import MainButton from "../../components/mainButton/MainButton";
import { useNavigate } from "react-router-dom";
import researchCard from "../../assets/Card6.png";
const ResearchCards = ({ title, description }) => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/research");
  };
  return (
    <div
      className="research-container-cardHome font-Poppins"
      style={{
        backgroundImage: `url(${researchCard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="research-card-title"> {title}</div>
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
