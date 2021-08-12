import * as types from '../constants/actionTypes';

const initialState = {
  currentPage: 'main',
  username: null,
  highScore: null,
};

const appReducer = (state = initialState, action) => {
  let currentPage;
  let highScore;
  let username;

  switch (action.type) {
    case types.CHANGE_PAGE: {
      currentPage = action.payload;
      return {
        ...state,
        currentPage
      }
    }
    case types.SET_HIGH_SCORE: {
      highScore = action.payload;
      return {
        ...state,
        highScore
      }
    }
    case types.SET_USERNAME: {
      username = action.payload;
      return {
        ...state,
        username
      }
    }
    default: {
      return state;
    }
  }
}

export default appReducer;