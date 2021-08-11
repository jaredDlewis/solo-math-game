import React from 'react';

const LoginButton = (props) => {
  const sendToLoginPage = () => {
    fetch('/login')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch((err) => {
        console.log('Error in Login fetch request: ', JSON.stringify(err));
      })
  }

  return (
    <div>
      <button onClick={sendToLoginPage}>Login</button>
    </div>
  )
}

export default LoginButton;