import React from 'react';

const ProblemDisplay = (props) => {
  if (props.secondNumber) {
    return (
      <div>
        <h2 className='number'>{props.firstNumber}</h2>
        <h2 className='number'>+ {props.secondNumber}</h2>
        <hr/>
        <h3>{props.gameMessage}</h3>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ProblemDisplay;