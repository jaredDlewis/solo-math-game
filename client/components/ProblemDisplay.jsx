import React from 'react';

const ProblemDisplay = (props) => {
  if (props.secondNumber) {
    return (
      <div>
        <h2 className="number">{props.firstNumber}</h2>
        <h2 className="number">+ {props.secondNumber}</h2>
        <p>-----</p>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default ProblemDisplay;