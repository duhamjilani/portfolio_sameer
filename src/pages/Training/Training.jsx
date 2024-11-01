// Training.js
import React from "react";
import "./Training.css";
import { Title } from "../../components";
import trainingPic from "../../assets/training-pic.png";

const Training = () => {
  return (
    <div className="TrainingAndMembership-container section-container">
      <Title MainTitle="Training And Memberships" />
      <div className="TrainingAndMembership-cards">
        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-text font-Poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus suscipit fugit voluptatum odio explicabo maiores
              dignissimos quos qui quasi autem ipsum vero id, aliquid quia
              obcaecati repellat eaque sint nihil!
            </div>
          </div>
        </div>


        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-text font-Poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus suscipit fugit voluptatum odio explicabo maiores
              dignissimos quos qui quasi autem ipsum vero id, aliquid quia
              obcaecati repellat eaque sint nihil!
            </div>
          </div>
        </div>



        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-text font-Poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus suscipit fugit voluptatum odio explicabo maiores
              dignissimos quos qui quasi autem ipsum vero id, aliquid quia
              obcaecati repellat eaque sint nihil!
            </div>
          </div>
        </div>





        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-text font-Poppins">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus suscipit fugit voluptatum odio explicabo maiores
              dignissimos quos qui quasi autem ipsum vero id, aliquid quia
              obcaecati repellat eaque sint nihil!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
