import React from 'react';
import { generateProblemActionCreator } from '../actions/actions';
import { connect } from 'react-redux'
import ProblemDisplay from './ProblemDisplay.jsx';

const mapDispatchToProps = dispatch => ({
  generateProblemActionCreator: () => dispatch(generateProblemActionCreator())
});

const mapStateToProps = state => ({
  firstNumber: state.math.firstNumber,
  secondNumber: state.math.secondNumber,
  answer: state.math.answer
})

const GameContainer = (props) => {
  return (
    <div>
      <button onClick={props.generateProblemActionCreator}>Generate Problem</button>
      <ProblemDisplay firstNumber={props.firstNumber} secondNumber={props.secondNumber} answer={props.answer} />
      {/* UserInputContainer */}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);