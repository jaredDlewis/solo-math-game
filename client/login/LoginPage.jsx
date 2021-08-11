import React from 'react';

const LoginPage = (props) => {
    return (
      <div className="login-container">
        Login
        <form method="POST" action='/login'>
          <input name="username" type="text" placeholder="username"></input>
          <input name="password" type="password" placeholder="password"></input>
          <input type='submit' value="login" />
        </form>
        {/* <a href='./signup'>Sign up</a> */}

      </div>
    )
}

export default LoginPage;