import React from 'react';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';

const LoginPage = (props) => {
    return (
      <div>
        <LoginForm />
        <SignUpForm />
      </div>
    )
}

export default LoginPage;