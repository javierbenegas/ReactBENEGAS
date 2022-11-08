import React, { useState } from 'react'
import "./button.css"

function Button(props) {
  const [ colorState, setColorState ] = useState({ backgroundColor: props.color });
  console.log(props);

  function handleClick (){
    setColorState({ backgroundColor: "grey" })
  }
  return (
    <button onClick={handleClick} style={colorState} className="btn"> 
      {props.children}
    </button>
  )
}

export default Button