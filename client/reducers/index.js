import { combineReducers } from 'redux';
import mathReducer from './mathReducer';

const reducers = combineReducers({
  math: mathReducer,
});

export default reducers;
