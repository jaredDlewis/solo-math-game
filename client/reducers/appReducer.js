import * as types from '../constants/actionTypes';

const initialState = {
  currentPage: 'main' 
};

const appReducer = (state = initialState, action) => {
  let currentPage;

  switch (action.type) {
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

export default appReducer;