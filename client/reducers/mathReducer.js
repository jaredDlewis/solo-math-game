import * as types from '../constants/actionTypes';

const initialState = {
  firstNumber: null,
  secondNumber: null,
  answer: null,
  score: 0,
  gameMessage: 'Submit Answer Below' // ABOUT TO HANDLE RIGHT OR WRONG FEEDBACK!!!
};

const mathReducer = (state = initialState, action) => {
  let firstNumber;
  let secondNumber;
  let answer;
  let score;
  let gameMessage;

  switch (action.type) {
    case types.GENERATE_PROBLEM: {
      firstNumber = Math.floor(Math.random() * 10);
      secondNumber = Math.floor(Math.random() * 10);
      answer = firstNumber + secondNumber;
      return {
        ...state,
        firstNumber,
        secondNumber,
        answer
      }
    }
    case types.ADD_TO_SCORE: {
      score = state.score + 1;
      return {
        ...state,
        score
      }
    }
    case types.REPSOND_TO_SUBMISSION: {
      gameMessage = action.payload;
      return {
        ...state,
        gameMessage
      }
    }
    default: {
      return state;
    }
  }
}

export default mathReducer;