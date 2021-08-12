import React from 'react';
import LoginForm from './LoginForm.jsx';
import SignUpForm from './SignUpForm.jsx';
import { connect } from 'react-redux';
import { setHighScoreActionCreator, setUsernameActionCreator } from '../actions/actions';

const mapDispatchToProps = dispatch => ({
  setHighScoreActionCreator: (highScore) => dispatch(setHighScoreActionCreator(highScore)),
  setUsernameActionCreator: (username) => dispatch(setUsernameActionCreator(username))
});

const LoginPage = (props) => {
    return (
      <div>
        <LoginForm 
          setHighScore={props.setHighScoreActionCreator} 
          setUsername={props.setUsernameActionCreator}
        />
        <SignUpForm 
          setHighScore={props.setHighScoreActionCreator} 
          setUsername={props.setUsernameActionCreator}
        />
      </div>
    )
}

export default connect(null, mapDispatchToProps)(LoginPage);