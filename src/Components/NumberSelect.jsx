import React, { useState } from 'react'
import './NumberSelect.css'
import RollDice from './RollDice'


const NumberSelect = () => {
    let numarry=[1, 2, 3, 4, 5, 6];
    let[selectNum, setSelectNum]= useState("");
    
    let storenum= selectNum;
    console.log(storenum);
  

  return (
    <>
    <div className="numberSelect">
        <div className="zero-num">
            <h1>0</h1>
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
    
   < RollDice/>
    </>
    
  )
}

export default NumberSelect