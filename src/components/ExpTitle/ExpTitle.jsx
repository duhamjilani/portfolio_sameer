import React from 'react'
import './ExpTitle.css'
const ExpTitle = ({ExpTitle, Desc} ) => {
  return (
    <div>
       <div className="ExpTitle-Container  ">
      <div className="ExpTitle_title">{ExpTitle}</div>
      <div className="ExpTitle_desc">{Desc}</div>
    </div>
    </div>
  )
}

export default ExpTitle
