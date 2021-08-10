import React from 'react';
import GameContainer from './GameContainer.jsx';

const App = (props) => {
    return (
      <div className="app-container">
        <h1 index="title">Math Game</h1>
        <GameContainer />
      </div>
    )
}

export default App;