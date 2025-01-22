import React from "react";
import "./AwardsCards.css";
import { FaTrophy } from "react-icons/fa";

const AwardsCards = ({ title, date, desc }) => {
  return (
    <div className="Awards-card-Home">
      <FaTrophy className="Trophy" />
      <div className="card-date">{date}</div>
      <div className="AwardsTItle">{title}</div>
      <div className="Awards-text ">{desc}</div>
    </div>
  );
};

export default AwardsCards;
