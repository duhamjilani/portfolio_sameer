import React from "react";
import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="upper_part">
        <p>Get in Touch</p>
      </div>
      <div>
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
            <FaWhatsapp />
            <div className="phoneNumber">+962 77 6 93 98 91</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
