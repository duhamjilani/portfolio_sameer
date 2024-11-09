import React from "react";
import "./IndustrialExp.css";
import { Title } from "../../components/index";
import ExpTimeLine from "../../components/ExpTimeline/ExpTimeline";

const IndustrialExp = () => {
  return (
    <>
   
    <div className="IndustrialExp-container font-Poppins section-container">
      <Title MainTitle="Journey Of Experience" />

      <div className="IndustrialExp-container-center">
        <div className="IndustrialExp-container-center-expTitleDate">
          <div className="IndustrialExp-container-center-expTitleDate-div">
            <div className="IndustrialExp-container-center-expTitle">
              RAM Expert
            </div>
            <div className="IndustrialExp-container-center-expDate">
              {" "}
              November 2023 – April 2024 (6 months)
            </div>
          </div>

          <div className="IndustrialExp-container-center-expTitleDate-div">
            <div className="IndustrialExp-container-center-expTitle">
              Master Student Intern (M1 and M2 Years){" "}
            </div>
            <div className="IndustrialExp-container-center-expDate">
              {" "}
              April 2011/2012 – August 2011/2012 (9 months)
            </div>
          </div>

          <div className="IndustrialExp-container-center-expTitleDate-div">
            <div className="IndustrialExp-container-center-expTitle">
              Junior Electrical & Instruments (E&I) Engineer
            </div>
            <div className="IndustrialExp-container-center-expDate">
              {" "}
              January 2009 – May 2010 (1 year and 4 months)
            </div>
          </div>

          <div className="IndustrialExp-container-center-expTitleDate-div">
            <div className="IndustrialExp-container-center-expTitle">
              Graduate Electrical & Instruments (E&I) Engineer
            </div>
            <div className="IndustrialExp-container-center-expDate">
              {" "}
              September 2008 – December 2008 (4 months)
            </div>
          </div>
        </div>
        <ExpTimeLine numOfCircles={4} />
        <div className="IndustrialExp-container-center-LocationDesc">
          <div className="IndustrialExp-container-center-LocationDesc-div">
            <div className="IndustrialExp-container-center-LocationTitle">
              Frieburg Company, UAE
            </div>
            <div className="IndustrialExp-container-center-Desc">
              {" "}
              Project: Etihad Rail Stage 4 Project (Project Value: X Million
              AED).
            </div>
          </div>

          <div className="IndustrialExp-container-center-LocationDesc-div">
            <div className="IndustrialExp-container-center-LocationTitle">
              AREVA NP, Paris La Defense, France
            </div>
            <div className="IndustrialExp-container-center-Desc">
              {" "}
              Project 1 (M1 year): Development of a New 3D Core Monitoring
              System “MAGELAN”. Project 2 (M2 year): Design Performance
              Improvement Management of Engineering and Projects Organization
              Design Center
            </div>
          </div>

          <div className="IndustrialExp-container-center-LocationDesc-div">
            <div className="IndustrialExp-container-center-LocationTitle">
              Consolidated Contractors International Company (CCIC), Abu Dhabi,
              UAE
            </div>
            <div className="IndustrialExp-container-center-Desc">
              {" "}
              Project: Expansion of Abu Dhabi Polymers Company (Borouge)
              (Project Value: 1.4 Billion USD)
            </div>
          </div>

          <div className="IndustrialExp-container-center-LocationDesc-div">
            <div className="IndustrialExp-container-center-LocationTitle">
              Kharafi National Limited Company, Kuwait, Kuwait
            </div>
            <div className="IndustrialExp-container-center-Desc">
              {" "}
              Project: Expansion of Mina Al-Ahmadi Refinery (MAA).
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default IndustrialExp;
