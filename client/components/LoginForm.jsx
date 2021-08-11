import React from 'react';

const LoginForm = (props) => {
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
    const requestBody = {};
    requestBody.username = document.getElementById('usernameInput').value;
    requestBody.password = document.getElementById('passwordInput').value;
    document.getElementById('usernameInput').value = '';
    document.getElementById('passwordInput').value = '';
    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => {
        console.log('response: ', response.json());
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div>
      Login<br></br>
      <input className="inputBox" id='usernameInput' placeholder="username" type='text' onKeyDown={textEnterHandler}></input>
      <input className="inputBox" id='passwordInput' placeholder="password" type='password' onKeyDown={textEnterHandler}></input>
      <button type='button' onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginForm;