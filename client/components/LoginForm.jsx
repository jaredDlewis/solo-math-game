import React from 'react';

const LoginForm = (props) => {
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
    const requestBody = {};
    requestBody.username = document.getElementById('LoginUsernameInput').value;
    requestBody.password = document.getElementById('LoginPasswordInput').value;
    document.getElementById('LoginUsernameInput').value = '';
    document.getElementById('LoginPasswordInput').value = '';
    fetch('/login', {
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
      Login<br></br>
      <input className="inputBox" id='LoginUsernameInput' placeholder="username" type='text' onKeyDown={textEnterHandler}></input>
      <input className="inputBox" id='LoginPasswordInput' placeholder="password" type='password' onKeyDown={textEnterHandler}></input>
      <button type='button' onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginForm;