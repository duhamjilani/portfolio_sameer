import React from "react";
import "./Awards.css";
import { FaTrophy } from "react-icons/fa";
import { Title } from "../../components";
const Awards = () => {
  return (
    <div className="AwardsAndHonors-container section-container">
      <Title MainTitle="Honors And Awards" />
      <div className="Awards-cards">
        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />

          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>

        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />
          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>

        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />
          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>

        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />
          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>

        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />
          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>

        <div className="Awards-card">
          <FaTrophy className="Trophy" />
          <Title MainTitle="Title" />
          <div className="Awards-text font-Poppins">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus suscipit fugit voluptatum odio explicabo maiores
            dignissimos quos qui quasi autem ipsum vero id, aliquid quia
            obcaecati repellat eaque sint nihil!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
