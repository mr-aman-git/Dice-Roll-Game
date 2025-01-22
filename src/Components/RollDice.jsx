import React, { useState } from 'react'
import './RollDice.css'
import One from '../assets/one.png'
import One2 from '../assets/two.png'
import One3 from '../assets/three.png'
import One4 from '../assets/four.png'
import One5 from '../assets/five.png'
import One6 from '../assets/six.png'

const RollDice = ({currentNumber, generateRandom, setScore}) => {
    
    

    let diceImage;
    if(currentNumber===1){
        diceImage=One
    } else if(currentNumber===2){
        diceImage=One2
    } else if(currentNumber===3){
        diceImage=One3
    } else if(currentNumber===4){
        diceImage=One4
    } else if(currentNumber===5){
        diceImage=One5
    } else if(currentNumber===6){
        diceImage=One6
    } else{
        diceImage=One
    };
    

  return (
    <>
    <div className="main-rolldice">

        <div className="rolldice-img">
            <img src= {diceImage} alt=""  onClick={generateRandom}/>
            <p>Click on Dice to roll</p>

            <div className="rolldice-btn">
            <button className='btn-1' onClick={()=>setScore('0')}>Reset Score</button>
            <button className='btn-2'>Show Rules</button>
        </div>
        </div>
    </div>
    </>
  )
}

export default RollDice