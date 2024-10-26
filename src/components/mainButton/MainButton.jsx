import React from "react";
import "./mainButton.css";

const MainButton = ({ children, functionality }) => {
  return (
    <button className="main-button" onClick={functionality}>
      {children}
    </button>
  );
};

export default MainButton;
