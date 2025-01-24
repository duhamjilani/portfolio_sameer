import { React, useState } from "react";
import CountUp from "react-countup";
import "./Counter.css";
import { useInView } from "react-intersection-observer";

const Counter = ({ endNum, CounterTitle, color, textColor }) => {
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  if (inView && !hasStarted) {
    setHasStarted(true);
  }
  return (
    <div className="Counter" ref={ref}>
      <div className="Counter_style" style={{ color: color }}>
        {hasStarted ? <CountUp start={0} end={endNum} duration={4} /> : 0}
      </div>
      <div className="Counter_text" style={{ color: textColor }}  >{CounterTitle}</div>
    </div>
  );
};

export default Counter;
