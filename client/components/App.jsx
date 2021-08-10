import React, { Component } from 'react';
import GameContainer from './GameContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app-container">
        <h1 index="title">Math Game</h1>
        <p>Hello world. I made it</p>
      </div>
    )
  }
}

export default App;