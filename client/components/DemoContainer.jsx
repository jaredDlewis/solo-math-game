import React from 'react';
import { 
  generateProblemActionCreator,
  respondToSubmissionActionCreator,
} from '../actions/actions';
import { connect } from 'react-redux';
import ProblemDisplay from './ProblemDisplay.jsx';
import DemoUserInputContainer from './DemoUserInputContainer.jsx';

const mapDispatchToProps = dispatch => ({
  generateProblemActionCreator: () => dispatch(generateProblemActionCreator()),
  respondToSubmissionActionCreator: (answerFeedback) => dispatch(respondToSubmissionActionCreator(answerFeedback))
});

const mapStateToProps = state => ({
  firstNumber: state.math.firstNumber,
  secondNumber: state.math.secondNumber,
  answer: state.math.answer,
  gameMessage: state.math.gameMessage
})

const DemoContainer = (props) => {
  return (
    <div>
      <button onClick={props.generateProblemActionCreator}>Generate Math Problem</button>
      {props.secondNumber !== null && 
        <div>
          <ProblemDisplay 
            firstNumber={props.firstNumber} 
            secondNumber={props.secondNumber}
            gameMessage={props.gameMessage}
          />
          <DemoUserInputContainer
            firstNumber={props.firstNumber} 
            secondNumber={props.secondNumber}
            generateProblemActionCreator={props.generateProblemActionCreator}
            respondToSubmissionActionCreator={props.respondToSubmissionActionCreator}
          />
        </div>}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(DemoContainer);