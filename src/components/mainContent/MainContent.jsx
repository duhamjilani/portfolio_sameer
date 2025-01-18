import React from "react";
import "./mainContent.css";

const MainContent = ({ children }) => {
  return <p className="mainContent-container">{children}</p>;
};

export default MainContent;
