import Dice from '../assets/dices1.png'
import "./GameHome.css"
import React from 'react'

const GameHomepage = ({toggle}) => {
  return (
    <>
    <div className="main-section">
        <div className="img-box">
            <img src={Dice} alt="" />
        </div>

        <div className="game-content">
            <h1>Dice Game</h1>
            <button onClick={toggle} className='PlayNow'>Play Now</button>
        </div>
    </div>
    </>
  )
}

export default GameHomepage