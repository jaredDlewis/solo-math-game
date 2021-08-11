import React from 'react';

const LoginForm = (props) => {
    return (
      <div>
        Login
        <form method="POST" action='/login'>
          <input className="inputBox" name="username" type="text" placeholder="username"></input>
          <input className="inputBox" name="password" type="password" placeholder="password"></input>
          <input className="inputBox" type='submit' value="login"/>
        </form>
      </div>
    )
}

export default LoginForm;