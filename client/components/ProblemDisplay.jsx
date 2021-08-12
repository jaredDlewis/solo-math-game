import React from 'react';

const ProblemDisplay = (props) => {
  return (
    <div>
      <h2 className='number'>{props.firstNumber}</h2>
      <h2 className='number'>+ {props.secondNumber}</h2>
      <hr/>
      <h3>{props.gameMessage}</h3>
    </div>
  )
}

export default ProblemDisplay;