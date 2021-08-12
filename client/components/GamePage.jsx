import React, { Component } from 'react';
import ScoreDisplay from './ScoreDisplay.jsx';
import GameContainer from './GameContainer.jsx';

class GamePage extends Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div >
        <ScoreDisplay/>
        <GameContainer/>
      </div>
    )
  }
}
export default GamePage;