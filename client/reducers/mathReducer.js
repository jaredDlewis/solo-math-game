import * as types from '../constants/actionTypes';

const initialState = {
  firstNumber: 5,
  secondNumber: null,
  answer: null,
  operation: 'addition'
};

const mathReducer = (state = initialState, action) => {
  let firstNumber;
  let secondNumber;
  let answer;
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
    default: {
      return state;
    }
  }
}

export default mathReducer;