import React from 'react'
import './ExpTimeline.css'
const ExpTimeline = ({ numOfCircles }) => {
  return (
    <div className="timeline">
      {[...Array(numOfCircles)].map((_, index) => (
        <React.Fragment key={index}>
         <div className='dashed_circle'>
         <div
          
          className="circle"
          style={{
            backgroundColor: index % 2 === 0 ? "#FF5733" : "rgba(29, 41, 57, 1)",
          }}
        ></div>
         </div>
         
         
          {index < numOfCircles - 1 && <div className="lineTime"></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ExpTimeline
