import * as types from '../constants/actionTypes';

const initialState = {
  firstNumber: null,
  secondNumber: null,
  answer: null,
  operation: 'addition'
};

const mathReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
}

export default mathReducer;