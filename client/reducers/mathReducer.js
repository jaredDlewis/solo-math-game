import * as types from '../constants/actionTypes';

const initialState = {
  firstNumber: null,
  secondNumber: null,
  answer: null,
  score: 0,
  gameMessage: 'Submit Answer Below',
  currentPage: 'main' 
};

const mathReducer = (state = initialState, action) => {
  let firstNumber;
  let secondNumber;
  let score;
  let gameMessage;
  let currentPage;

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
    case types.CHANGE_PAGE: {
      currentPage = action.payload;
      return {
        ...state,
        currentPage
      }
    }
    default: {
      return state;
    }
  }
}

export default mathReducer;