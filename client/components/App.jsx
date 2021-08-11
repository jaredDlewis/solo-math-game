import React from 'react';
import GameContainer from './GameContainer.jsx';
import LoginButton from './LoginButton.jsx';

const App = (props) => {
    return (
      <div className="app-container">
        <h1 index="title-main">Math Game</h1>
        <LoginButton />
        <GameContainer />
      </div>
    )
}

export default App;