import React from 'react';
import { changePageActionCreator } from '../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  changePageActionCreator: () => dispatch(changePageActionCreator('login'))
});

const LoginButton = (props) => {
  return (
    <div>
      <button onClick={props.changePageActionCreator}>Login</button>
    </div>
  )
}

export default connect(null, mapDispatchToProps)(LoginButton);