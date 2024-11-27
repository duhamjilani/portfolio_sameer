// Training.js
import React from "react";
import "./Training.css";
import { Title } from "../../components";
import trainingPic from "../../assets/training-pic.png";
import trainingPic2 from '../../assets/trainingPic.jpeg'
const Training = () => {
  return (
    <div className="TrainingAndMembership-container section-container font-Poppins">
      <Title MainTitle="Training And Memberships" />
      <div className="banner-container">
<img src={trainingPic2} alt="img" className="banner-Image"/>

      </div>
      <div className="TrainingAndMembership-cards">
        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Professional Training</div>
            <div className="card-date">1/1/2024</div>
            <div className="card-text ">
            	Offer a one-hour seminar as part of the International FDP
             “Empowering Innovations: Sixdays International 
             FDP on AI Technologies” on 13rd July 2024 with a
              talk entitled “MATLAB for AI” 
            (ONLINE – Certificate is available).
           
            </div>
          </div>
        </div>


        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">AI </div>
            <div className="card-date">1/1/2024</div>
            <div className="card-text font-Poppins">
            (Python basics, Data Science, Machine Learning, 
            ) 
            </div>
          </div>
        </div>



        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-date">1/1/2024</div>
            <div className="card-text font-Poppins">
            Systems (AT-SGIRES project funded by the European Union 
            through the ERASMUS+ Programme) Training Course
             (Challenges for Grids integration from RES 
             and teaching and learning methods knowledge transfer) 
             organized by the Hamburg University for Technology in the
              framework of EU-funded project AT-SGIRES in Hamburg, Germany, 
              September 16-20, 2019
             (Certificate is available).
            </div>
          </div>
        </div>





        <div className="TrainingAndMembership-card">
          <img src={trainingPic} className="trainingPic" alt="pic" />
          <div className="card-content">
            <div className="card-title">Training</div>
            <div className="card-date">1/1/2024</div>
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
            <div className="card-date">1/1/2024</div>
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
            <div className="card-date">1/1/2024</div>
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
            <div className="card-date">1/1/2024</div>
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
