import { combineReducers } from 'redux';
import appReducer from './appReducer';
import mathReducer from './mathReducer';

const reducers = combineReducers({
  math: mathReducer,
  app: appReducer
});

export default reducers;
