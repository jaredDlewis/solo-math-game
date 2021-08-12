import React from 'react';
import DemoContainer from './DemoContainer.jsx';
import { changePageActionCreator } from '../actions/actions';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  changePageActionCreator: () => dispatch(changePageActionCreator('login'))
});


const MainPage = (props) => {
    return (
      <div >
        <button onClick={props.changePageActionCreator}>Login To Play</button>
        <div>Or</div>
        <DemoContainer />
      </div>
    )
}

export default connect(null, mapDispatchToProps)(MainPage);