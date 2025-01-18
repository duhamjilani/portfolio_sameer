import React from "react";
import "./WorkTitle.css";
const WorkTitle = ({ WorkTitle, Date }) => {
  return (
    <div className="WorkTitle-Container  ">
      <div className="WorkTitle_title">{WorkTitle}</div>
      <div className="WorkTitle_date">{Date}</div>
    </div>
  );
};

export default WorkTitle;
