import React from "react";
import CountUp from "react-countup";
import "./Counter.css";
const Counter = ({endNum,CounterTitle,color}) => {
  return (
    <div className="Counter">
      <div className="Counter_style" style={{ color: color}}>
        <CountUp start={0} end={endNum} duration={7}  />
      </div>
      <div className="Counter_text">{CounterTitle}</div>
    </div>
  );
};

export default Counter;
