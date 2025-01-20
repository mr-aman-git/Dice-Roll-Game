import React from 'react'
import styled from 'styled-components';
import Dice from '../assets/dices1.png'


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
    {/* <Container>
        <div className="diceImg">
            <img src={Dice} alt="" />
        </div>

        <div className="DiceContent">
            <h2>Dice Game</h2>
            <button>Play Now</button>
        </div>
    </Container> */}
    </>
  )
}

export default GameHomepage


// let Container= styled.div`
//     width: 100%;
//     display: flex;
//     background-color: red;
//     justify-content: space-evenly;
//     align-items: center;
//     margin-top: 120px;

//     .diceImg img{
//         width: 600px;
//         height: auto;
//         background-color: blue;
        
//     }
//     .DiceContent{
//         width: 600px;
//         h2{
//             font-size: 80px;
//         };
//         button{
//             width: 120px;
//             height: 40px;
//             background-color: black;
//             color: white;
//             border: 1px solid transparent;
//             cursor: pointer;

//         };
//         button:hover{
//             background-color: White;
//             border: 1px solid black;
//             color: black;
//         };
//     }
// `;