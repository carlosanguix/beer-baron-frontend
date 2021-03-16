import {
  SET_WRONG_USER_FIELD,
  SET_WRONG_EMAIL_FIELD,
} from '../actions/actionTypes';

const initialState = {
  wrongUser: false,
  wrongEmail: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WRONG_USER_FIELD:
      return { ...state, wrongUser: action.isWrongUser };
    case SET_WRONG_EMAIL_FIELD:
      return { ...state, wrongEmail: action.isWrongEmail };
    default:
      return { ...state };
  }
};

export const readWrongValidation = (state) => ({ ...state.errorsReducer });

export default reducer;
