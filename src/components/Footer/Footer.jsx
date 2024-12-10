import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYahoo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="footer font-Heebo">
      <div className="upper_part">
        <h6 className="font-Roboto">Get in Touch</h6>
        <div className="social_media">
          <div className="icon_link">
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/sameer-al-dahidi-b2031b120/">
              Sameer-Al-Dahidi
            </a>
          </div>
          <div className="icon_link">
            <MdEmail />
            <a href="mailto:sameer.aldahidi@gju.edu.jo/">
              sameer.aldahidi@gju.edu.jo
            </a>
          </div>
          <div className="icon_link">
            <MdEmail />
            <a href="mailto:sameer.aldahidi@polimi.it">
              sameer.aldahidi@polimi.it
            </a>
          </div>
          <div className="icon_link">
            <FaYahoo />
            <a href="mailto:sameer.dahidi@yahoo.com">sameer.dahidi@yahoo.com</a>
          </div>
          <div className="icon_link">
            <FaPhone />
            <div className="phoneNumber">+962 77 6 93 98 91</div>
          </div>
        </div>
      </div>
      <hr className="line" />
      <div className="footer_text ">
        <p>Copyright ©2024 Nexa Web & App Freelancers All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
