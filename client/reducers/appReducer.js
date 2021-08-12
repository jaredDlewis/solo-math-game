import * as types from '../constants/actionTypes';

const initialState = {
  currentPage: 'main',
  username: null,
};

const appReducer = (state = initialState, action) => {
  let currentPage;
  let username;

  switch (action.type) {
    case types.CHANGE_PAGE: {
      currentPage = action.payload;
      return {
        ...state,
        currentPage
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