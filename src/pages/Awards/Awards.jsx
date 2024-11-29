import React, { useEffect, useState } from "react";
import "./Awards.css";
import { FaTrophy } from "react-icons/fa";
import { Title } from "../../components";
import awardspic from "../../assets/awardsPic.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";
const Awards = () => {
  const [awards, setAwards] = useState([]);

  const handleFetchAwards = async () => {
    try {
      const fetchedAwards = await axios.post(`${api}info/get-infos-by-type`, {
        type: "Award",
      });

      setAwards(fetchedAwards.data.data.sort());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchAwards();
  }, []);

  return (
    <div className="AwardsAndHonors-container section-container font-Poppins">
      <Title MainTitle="Honors And Awards" />
      <div className="banner-container">
        <img src={awardspic} alt="img" className="banner-Image" />
      </div>
      <div className="Awards-cards">
        {awards.map((award) => {
          return (
            <div className="Awards-card" key={award._id}>
              <FaTrophy className="Trophy" />
              <div className="AwardsTItle">{award.title}</div>
              <div className="card-date">{award.date}</div>
              <div className="Awards-text ">{award.description}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Awards;
