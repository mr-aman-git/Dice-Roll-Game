import React from 'react'
import styled from 'styled-components';
import Dice from '../assets/dices1.png'
import "./GameHome.css"


const GameHomepage = () => {
  return (
    <>
    <div className="main-section">
        <div className="img-box">
            <img src={Dice} alt="" />
        </div>

        <div className="game-content">
            <h1>Dice Game</h1>
            <button>Play Now</button>
        </div>
    </div>
    </>
  )
}

export default GameHomepage