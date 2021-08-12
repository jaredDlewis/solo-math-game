import React from 'react';

const LoginForm = (props) => {
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
    props.loginSignupFunc('login');
  }

  return (
    <div>
      Login<br></br>
      <input className="inputBox" id='loginUsernameInput' placeholder="username" type='text' onKeyDown={textEnterHandler}></input>
      <input className="inputBox" id='loginPasswordInput' placeholder="password" type='password' onKeyDown={textEnterHandler}></input>
      <button type='button' onClick={handleClick}>Login</button>
    </div>
  )
}

export default LoginForm;