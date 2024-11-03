import React from "react";
import "./Research.css";
import { MainButton, Title } from "../../components";
import Swal from "sweetalert2";
import researchCard from '../../assets/Card6.png'
const Research = () => {
  const showAlertDetail = () => {
    Swal.fire({
      title: `${"Title"}`,

      text: " Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",

      confirmButtonText: "Back",
      confirmButtonColor: "rgba(0, 52, 102, 1)",
      customClass: {
        title: "alert-title",
        text: "alert-text",
      },
    });
  };
  return (
    <div className="research-container section-container">
      <Title MainTitle="Research" />
      <div className="research-container-cards">
      <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
         
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>



        <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>




        <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
        
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>





        <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>




        <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>




        <div
  className="research-container-card font-Poppins"
  style={{
    backgroundImage: `url(${researchCard})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
          <div className="research-card-title"> Title</div>
          <div className="research-card-desc-container">
            <div className="research-card-desc">
              Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
              interdum Lorem ipsum dolor sit amet consectetur. Morbi diam nisi
              nam diam interdum
            </div>
          </div>

          <MainButton title={"show details"} functionality={showAlertDetail}>
            Show Details
          </MainButton>
        </div>
      </div>
    </div>
  );
};

export default Research;
