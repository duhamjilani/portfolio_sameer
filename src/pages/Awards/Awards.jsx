import React, { useEffect, useState } from "react";
import "./Awards.css";
import { FaTrophy } from "react-icons/fa";
import { Title, Counter } from "../../components";
import awardspic from "../../assets/awardsPic.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";
import { Helmet } from "react-helmet-async";
const Awards = () => {
  const [awards, setAwards] = useState([]);
  const [ImageSrc, setImageSrc] = useState("");
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
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

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/awards`);
        console.log(response);
        if (response.data.images) {
          setImageSrc(`${response.data.images[0].path}`);
        }
      } catch (error) {
        console.error("Error fetching the latest image:", error);
      }
    };

    fetchImage();
  }, []);

  return (
    <div className="AwardsAndHonors-container section-container ">
      <Helmet>
        <title>Awards - Dr. Sameer Al-Dahidi</title>
        <meta
          name="description"
          content="Discover the awards and honors achieved by Dr. Sameer Al-Dahidi for outstanding contributions in academia and industry."
        />
        <meta
          name="keywords"
          content="awards, honors, achievements, Dr. Sameer Al-Dahidi, academic awards, professional recognition"
        />
        <link rel="canonical" href="https://sameer-aldahidi.com/awards" />
      </Helmet>

      <Title MainTitle="Honors And Awards" />
      <div className="banner-container">
        <img src={ImageSrc} alt="img" className="banner-Image" />
      </div>
      <Title MainTitle="Statistics At A Glance"/>
      <div className="countersContainer">
        <Counter
          CounterTitle="Awards And Honors "
          endNum={counter1}
          color={"rgba(252, 128, 31, 1)"}
        />
        <Counter
          CounterTitle="Scholarships"
          endNum={counter2}
          color={"rgba(51, 103, 153, 1)"}
        />
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
