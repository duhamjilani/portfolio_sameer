import { React, useState, useEffect } from "react";
import "./IndustrialExp.css";
import { Title } from "../../components/index";
import ExpTimeLine from "../../components/ExpTimeline/ExpTimeline";
import IndImage from "../../assets/indImage.jpeg";
import axios from "axios";
import { api } from "../../constants/apiLink";
import { Helmet } from "react-helmet-async";

const IndustrialExp = () => {
  const [ImageSrc, setImageSrc] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`${api}images/getImages/industrial`);
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
    <>
      <div className="IndustrialExp-container  section-container">
        <Helmet>
          <title>Industrial Experience - Dr. Sameer Al-Dahidi</title>
          <meta
            name="description"
            content="Explore the industrial experience of Dr. Sameer Al-Dahidi, including impactful projects and collaborations with industry leaders."
          />
          <meta
            name="keywords"
            content="industrial experience, industry projects, engineering, professional experience, Dr. Sameer Al-Dahidi"
          />
          <link
            rel="canonical"
            href="https://sameer-aldahidi.com/industrialExp"
          />
        </Helmet>

        <Title MainTitle="Journey Of Industrial Experience" />
        <div className="banner-container">
          <img src={ImageSrc} alt="img" className="banner-Image" />
        </div>

       
          <div className="IndustrialExp-container  section-container">
            <div className="IndustrialExp-row">
              <div className="IndustrialExp-item IndustrialExp-title">
                RAM Expert
              </div>
              <div className="IndustrialExp-item IndustrialExp-company">
                Frieburg Company
              </div>
              <div className="IndustrialExp-item">
                UAE
              </div>
              <div className="IndustrialExp-item IndustrialExp-period">
                November 2023 – April 2024
              </div>
            </div>

            <div className="IndustrialExp-row">
              <div className="IndustrialExp-item IndustrialExp-title">
                Master Student Intern
              </div>
              <div className="IndustrialExp-item IndustrialExp-company">
                AREVA NP
              </div>
              <div className="IndustrialExp-item">
              Paris La Defense, France
              </div>
              <div className="IndustrialExp-item IndustrialExp-period">
                April 2011 – August 2011
              </div>
            </div>

            <div className="IndustrialExp-row">
              <div className="IndustrialExp-item IndustrialExp-title">
                Junior Electrical & Instruments (E&I) Engineer
              </div>
              <div className="IndustrialExp-item IndustrialExp-company">
                Consolidated Contractors International Company
              </div>
              <div className="IndustrialExp-item">
                 Abu Dhabi 
              </div>
              <div className="IndustrialExp-item IndustrialExp-period">
                January 2009 – May 2010
              </div>
            </div>

            <div className="IndustrialExp-row">
              <div className="IndustrialExp-item IndustrialExp-title">
                Graduate Electrical & Instruments (E&I) Engineer
              </div>
              <div className="IndustrialExp-item IndustrialExp-company">
                Kharafi National Limited Company
              </div>
              <div className="IndustrialExp-item">
              Kuwait
              </div>
              <div className="IndustrialExp-item IndustrialExp-period">
                September 2008 – December 2008
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default IndustrialExp;
