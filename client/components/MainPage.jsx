import React from 'react';
import { connect } from 'react-redux';
import GameContainer from './GameContainer.jsx';
import LoginButton from './LoginButton.jsx';


const MainPage = (props) => {
    return (
      <div >
        <LoginButton />
        <GameContainer />
      </div>
    )
}

export default MainPage;