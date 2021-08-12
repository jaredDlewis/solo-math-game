import React from 'react';
import { respondToSubmissionActionCreator } from '../actions/actions';

const SignUpForm = (props) => {
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
  const requestBody = {};
  requestBody.username = document.getElementById('SignupUsernameInput').value;
  requestBody.password = document.getElementById('SignupPasswordInput').value;
  document.getElementById('SignupUsernameInput').value = '';
  document.getElementById('SignupPasswordInput').value = '';
  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  })
    .then((response) => response.json())
    .then((response) => {
      if (typeof response === 'object') {
        props.setHighScore(response.highScore);
        props.setUsername(response.username);
        
      }
    })
    .catch((err) => {
      console.log(err);
    })
}

return (
  <div>
    Sign Up<br></br>
    <input className="inputBox" id='SignupUsernameInput' placeholder="username" type='text' onKeyDown={textEnterHandler}></input>
    <input className="inputBox" id='SignupPasswordInput' placeholder="password" type='password' onKeyDown={textEnterHandler}></input>
    <button type='button' onClick={handleClick}>Sign Up</button>
  </div>
  )
}

export default SignUpForm;