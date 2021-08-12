import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  
});

const mapStateToProps = state => ({
  
})

class Timer extends Component {
  constructor (props) {
    super(props);
  }

  calculateTimeLeft() {

  }

  render() {
    return (
      <div >
        <ScoreDisplay/>
        {/* Timer */}
        <GameContainer/>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Timer);