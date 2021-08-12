import React, { Component } from 'react';
import { 
  generateProblemActionCreator, 
  addToScoreActionCreator, 
  respondToSubmissionActionCreator,
  setEndTimeActionCreator
} from '../actions/actions';
import { connect } from 'react-redux';
import ProblemDisplay from './ProblemDisplay.jsx';
import UserInputContainer from './UserInputContainer.jsx';

const mapDispatchToProps = dispatch => ({
  generateProblemActionCreator: () => dispatch(generateProblemActionCreator()),
  addToScoreActionCreator: () => dispatch(addToScoreActionCreator()),
  respondToSubmissionActionCreator: (answerFeedback) => dispatch(respondToSubmissionActionCreator(answerFeedback)),
  setEndTimeActionCreator: (endTime) => dispatch(setEndTimeActionCreator(endTime))
});

const mapStateToProps = state => ({
  firstNumber: state.math.firstNumber,
  secondNumber: state.math.secondNumber,
  gameMessage: state.math.gameMessage
})

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.props.generateProblemActionCreator();
    this.props.setEndTimeActionCreator(+new Date());
  }

  render() {
    return (
      <div>
        <button onClick={this.handleStart}>Start</button>
        {this.props.secondNumber !== null && 
          <div>
            <ProblemDisplay 
              firstNumber={this.props.firstNumber} 
              secondNumber={this.props.secondNumber}
              gameMessage={this.props.gameMessage}
            />
            <UserInputContainer
              firstNumber={this.props.firstNumber} 
              secondNumber={this.props.secondNumber}
              addToScoreActionCreator={this.props.addToScoreActionCreator} 
              generateProblemActionCreator={this.props.generateProblemActionCreator}
              respondToSubmissionActionCreator={this.props.respondToSubmissionActionCreator}
            />
          </div>}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);