import * as types from '../constants/actionTypes';

export const generateProblemActionCreator = () => ({
  type: types.GENERATE_PROBLEM,
  payload: ''
});

export const addToScoreActionCreator = () => ({
  type: types.ADD_TO_SCORE,
  payload: ''
});

export const respondToSubmissionActionCreator = (answerFeedback) => ({
  type: types.REPSOND_TO_SUBMISSION,
  payload: answerFeedback
});

export const changePageActionCreator = (newPage) => ({
  type: types.CHANGE_PAGE,
  payload: newPage
});