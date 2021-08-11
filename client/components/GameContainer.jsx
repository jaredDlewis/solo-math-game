import React from 'react';
import { generateProblemActionCreator, addToScoreActionCreator, respondToSubmissionActionCreator } from '../actions/actions';
import { connect } from 'react-redux'
import ProblemDisplay from './ProblemDisplay.jsx';
import UserInputContainer from './UserInputContainer.jsx';

const mapDispatchToProps = dispatch => ({
  generateProblemActionCreator: () => dispatch(generateProblemActionCreator()),
  addToScoreActionCreator: () => dispatch(addToScoreActionCreator()),
  respondToSubmissionActionCreator: (answerFeedback) => dispatch(respondToSubmissionActionCreator(answerFeedback))
});

const mapStateToProps = state => ({
  firstNumber: state.math.firstNumber,
  secondNumber: state.math.secondNumber,
  answer: state.math.answer,
  gameMessage: state.math.gameMessage
})

const GameContainer = (props) => {
  return (
    <div>
      {/* ScoreDisplay */}
      <button onClick={props.generateProblemActionCreator}>Generate Problem</button>
      <ProblemDisplay 
        firstNumber={props.firstNumber} 
        secondNumber={props.secondNumber}
        gameMessage={props.gameMessage}
      />
      <UserInputContainer
        secondNumber={props.secondNumber}
        answer={props.answer} 
        addToScoreActionCreator={props.addToScoreActionCreator} 
        generateProblemActionCreator={props.generateProblemActionCreator}
        respondToSubmissionActionCreator={props.respondToSubmissionActionCreator}
      />
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);