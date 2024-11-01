import React from 'react'
import './AwardsCards.css'
import { FaTrophy } from "react-icons/fa";


import Title from '../title/Title';
const AwardsCards = () => {
  return (
    <div className='Awards-card'>
        <FaTrophy className='Trophy' />
        <Title MainTitle="Title" />
       <div className='Awards-text font-Poppins'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus suscipit fugit
         voluptatum odio explicabo maiores dignissimos quos qui
          quasi autem ipsum vero id, aliquid quia obcaecati
           repellat eaque sint nihil!</div>
     
    </div>
  )
}

export default AwardsCards
