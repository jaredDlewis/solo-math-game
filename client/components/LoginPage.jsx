import React, { Component } from 'react';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import { connect } from 'react-redux';
import { changePageActionCreator, setHighScoreActionCreator, setUsernameActionCreator } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  setHighScoreActionCreator: (highScore) => dispatch(setHighScoreActionCreator(highScore)),
  setUsernameActionCreator: (username) => dispatch(setUsernameActionCreator(username)),
  changePageActionCreator: () => dispatch(changePageActionCreator('game'))
});


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.loginSignupFunc = this.loginSignupFunc.bind(this);
  }
  
  loginSignupFunc(loginOrSignup) {
    const requestBody = {};
    requestBody.username = document.getElementById(`${loginOrSignup}UsernameInput`).value;
    requestBody.password = document.getElementById(`${loginOrSignup}PasswordInput`).value;
    document.getElementById(`${loginOrSignup}UsernameInput`).value = '';
    document.getElementById(`${loginOrSignup}PasswordInput`).value = '';
    fetch(`/${loginOrSignup}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => response.json())
      .then((response) => {
        if (typeof response === 'object') {
          this.props.setHighScoreActionCreator(response.highScore);
          this.props.setUsernameActionCreator(response.username);
          this.props.changePageActionCreator();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }
  
  render() {
    return (
      <div>
        <LoginForm 
          loginSignupFunc={this.loginSignupFunc}
        />
        <SignUpForm 
          loginSignupFunc={this.loginSignupFunc}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);