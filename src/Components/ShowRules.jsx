import React from 'react'

export const ShowRules = () => {


  let showrules= {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',

  };

  let styles= {
    backgroundColor:"aqua",
    width: '750px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    padding: '12px'
  };

  let heading={
    fontSize:'22px',
    marginBottom: '12px'
  }
  return (
    <>
    <div className="show-rule" style={showrules} >
      <div style={styles}>
      <div>
        <h3 style={heading}>How to play dice game</h3>
      </div>

      <p>Select any number</p>
      <p>Click on dice image</p>
      <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
      <p>if you get wrong guess then 1 point will be dedcuted </p>
      </div>
    </div>
    </>
  )
}

export default ShowRules
