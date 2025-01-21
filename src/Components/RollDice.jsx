import React from 'react'
import './RollDice.css'
import One from '../assets/one.png'

const RollDice = () => {
  return (
    <>
    <div className="main-rolldice">

        <div className="rolldice-img">
            <img src= {One} alt="" />
            <p>Click on Dice to roll</p>
        </div>

    </div>
    </>
  )
}

export default RollDice