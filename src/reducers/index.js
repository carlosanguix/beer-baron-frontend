import { combineReducers } from 'redux';
import userReducer from './userReducer';
import errorsReducer from './errorsReducer';
import notifierReducer from './notifierReducer';

export default combineReducers({
  userReducer,
  errorsReducer,
  notifierReducer,
});
