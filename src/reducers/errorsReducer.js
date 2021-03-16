import {
  SET_WRONG_USER_FIELD,
  SET_WRONG_EMAIL_FIELD,
  SET_INVALID_PASSWORD,
  SET_NOT_MATCH_PASSWORD,
} from '../actions/actionTypes';

const initialState = {
  wrongUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WRONG_USER_FIELD:
      return { ...state, ...action };
    case SET_WRONG_EMAIL_FIELD:
      return { ...state, ...action };
    case SET_INVALID_PASSWORD:
      return { ...state, ...action };
    case SET_NOT_MATCH_PASSWORD:
      return { ...state, ...action };
    default:
      return { ...state };
  }
};

export const readUser = (state) => ({ ...state.userReducer });
export const readIsLoggedIn = (state) => state.userReducer.isLogged;

export default reducer;
