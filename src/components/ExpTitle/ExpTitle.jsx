import React from 'react'
import './ExpTitle.css'
const ExpTitle = ({Exptitle, Desc} ) => {
  return (
    <div>
       <div className="WorkTitle-Container font-Poppins ">
      <div className="WorkTitle_title">{Exptitle}</div>
      <div className="WorkTitle_date">{Desc}</div>
    </div>
    </div>
  )
}

export default ExpTitle
