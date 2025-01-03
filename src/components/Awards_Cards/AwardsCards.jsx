import React from "react";
import "./AwardsCards.css";
import { FaTrophy } from "react-icons/fa";

const AwardsCards = ({ title, date, desc }) => {
  return (
    <div className="Awards-card">
      <FaTrophy className="Trophy" />
      <div className="card-date">{date}</div>
      <div className="AwardsTItle">{title}</div>
      <div className="Awards-text font-Poppins">{desc}</div>
    </div>
  );
};

export default AwardsCards;
