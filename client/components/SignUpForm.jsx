import React from 'react';

const SignUpForm = (props) => {
    return (
      <div>
        Sign Up
        <form method="POST" action='/signup'>
          <input className="inputBox" name="username" type="text" placeholder="username"></input>
          <input className="inputBox" name="password" type="password" placeholder="password"></input>
          <input type='submit' value="signup"/>
        </form>
      </div>
    )
}

export default SignUpForm;