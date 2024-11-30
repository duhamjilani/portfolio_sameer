import React from "react";
import "./mainButton.css";

const MainButton = ({ children, functionality, IsTab }) => {
  return (
    <button
      className={IsTab ? "tab-btns" : "main-button"}
      onClick={functionality}
    >
      {children}
    </button>
  );
};

export default MainButton;
