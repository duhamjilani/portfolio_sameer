import React from "react";
import "./ResearchCards.css";
import MainButton from "../../components/mainButton/MainButton";
import { useNavigate } from "react-router-dom";
import researchCard from "../../assets/Card6.png";
const ResearchCards = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/research");
  };
  return (
    <div>
      <div
        className="research-container-cardHome font-Poppins"
        style={{
          backgroundImage: `url(${researchCard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="research-card-title"> Title</div>
        <div className="research-card-desc-containerHome">
          <div className="research-card-desc">
            Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
            interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
            diam interdum
          </div>
        </div>

        <MainButton title={"show details"} functionality={navigateHandler}>
          Show Details
        </MainButton>
      </div>
    </div>
  );
};

export default ResearchCards;
