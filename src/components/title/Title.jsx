import React from "react";
import "./title.css";

const Title = (props) => {
  return (
    <div>
      <div className="Main_title ">{props.MainTitle}</div>
    </div>
  );
};

export default Title;
