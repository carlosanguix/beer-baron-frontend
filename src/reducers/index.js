import { combineReducers } from 'redux';
import userReducer from './userReducer';
import notifierReducer from './notifierReducer';

export default combineReducers({
  userReducer,
  notifierReducer,
});
