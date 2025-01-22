import React, { useState } from 'react'
import './NumberSelect.css'
import RollDice from './RollDice'


const NumberSelect = () => {
    let numarry=[1, 2, 3, 4, 5, 6];
    let[selectNum, setSelectNum]= useState("");
    let[currentNumber, setCurrentNumber]= useState('');
    let[score, setScore]= useState('0');


    let generateRandom=()=>{
      let randomNumber= Math.floor(Math.random()*6)+1
      setCurrentNumber((prev)=>randomNumber);

      if(selectNum==randomNumber){
        setScore((prev)=>prev + randomNumber);
      } else{
        setScore((prev)=>prev - 1);
      };
      setSelectNum('');
  }
    
    

  return (
    <>
    <div className="numberSelect">
        <div className="zero-num">
            <h1>{score}</h1>
            <p>Total Score</p>
        </div>
      <div className="main-div-for-support">
        <div className="dice-num">
          {numarry.map((value, i)=><div className="box" key={i} onClick={()=>setSelectNum(value)
          } style={{
            background: selectNum===value? 'black' : '',
            color: selectNum === value ? 'white' : ''
            }}>{value}</div>)}
        </div>
        <div className="select-number">
      <p>Select Number</p>
    </div>
      </div>

    </div>
    
   < RollDice currentNumber={currentNumber} generateRandom={generateRandom}/>
    </>
    
  )
}

export default NumberSelect