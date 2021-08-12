import React from 'react';


const DemoUserInputContainer = (props) => {
  
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
    const input = document.getElementById('demoUserInput').value;
    document.getElementById('demoUserInput').value = '';
    if (input === '' || Number(input) !== props.firstNumber + props.secondNumber) {
      props.respondToSubmissionActionCreator('Try Again!');
      return;
    }
    props.respondToSubmissionActionCreator('Submit Answer Below');
    props.generateProblemActionCreator();
    return;
  }
  
  return (
    <div>
      <h4>
        <input className="inputBox" autoComplete='off' type='text' id='demoUserInput' onKeyDown={textEnterHandler}></input>
        <button type='button' onClick={handleClick}>Submit Answer</button>
      </h4>
    </div>
  )
}

export default DemoUserInputContainer;