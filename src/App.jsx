import React, { useState } from 'react'
import GameHomepage from './Components/GameHomepage'
import NumberSelect from './Components/NumberSelect'


const App = () => {

  let [isPlay, setIsPlay]= useState(false);
  let togglePlay =()=>{
    setIsPlay ((prev)=>!prev);
  }
  return (
    <>
    {
      isPlay ? <NumberSelect />:<GameHomepage toggle={togglePlay}/>
    }
    
    </>
  )
}

export default App