import React from 'react';

const SignUpForm = (props) => {
  function textEnterHandler(e) {
    if (e.key === 'Enter') handleClick();
  }

  function handleClick() {
    props.loginSignupFunc('signup');
  }

  return (
    <div>
      Sign Up<br></br>
      <input className="inputBox" id='signupUsernameInput' placeholder="username" type='text' onKeyDown={textEnterHandler}></input>
      <input className="inputBox" id='signupPasswordInput' placeholder="password" type='password' onKeyDown={textEnterHandler}></input>
      <button type='button' onClick={handleClick}>Sign Up</button>
    </div>
  )
}

export default SignUpForm;