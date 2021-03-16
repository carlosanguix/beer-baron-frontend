import {
  SET_USER, SET_USER_DATA, SET_USER_LOADING, SET_USER_LOGGED,
} from '../actions/actionTypes';

const initialState = {
  isLogged: false,
  name: '',
  surname: '',
  email: '',
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, ...action };
    case SET_USER_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SET_USER_LOGGED:
      return { ...state, isLogged: action.logged };
    case SET_USER_DATA:
      return {
        ...state, name: action.user.name, email: action.user.email, surname: action.user.surname,
      };
    default:
      return { ...state };
  }
};

export const readUser = (state) => ({ ...state.userReducer });
export const readIsLoggedIn = (state) => state.userReducer.isLogged;

export default reducer;
