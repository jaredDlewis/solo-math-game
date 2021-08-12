import * as types from '../constants/actionTypes';

const initialState = {
  firstNumber: null,
  secondNumber: null,
  score: 0,
  highScore: null,
  gameMessage: 'Submit Answer Below',
};

const mathReducer = (state = initialState, action) => {
  let firstNumber;
  let secondNumber;
  let score;
  let highScore;
  let gameMessage;

  switch (action.type) {
    case types.GENERATE_PROBLEM: {
      firstNumber = Math.floor(Math.random() * 10);
      secondNumber = Math.floor(Math.random() * 10);
      return {
        ...state,
        firstNumber,
        secondNumber,
      }
    }
    case types.ADD_TO_SCORE: {
      score = state.score + 1;
      highScore = (score > state.highScore) ? score : state.highScore;
      return {
        ...state,
        score,
        highScore
      }
    }
    case types.SET_HIGH_SCORE: {
      highScore = action.payload;
      return {
        ...state,
        highScore
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