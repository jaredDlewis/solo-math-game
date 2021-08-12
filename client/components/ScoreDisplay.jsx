import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  score: state.math.score,
  highScore: state.math.highScore
})

const ScoreDisplay = (props) => {
  return (
    <div>
      <div>Score: {props.score}</div>
      <div>High Score: {props.highScore}</div>
    </div>
  )
}
export default connect(mapStateToProps, null)(ScoreDisplay);