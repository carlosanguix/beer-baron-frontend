import {
  SET_WRONG_USER_FIELD,
  SET_WRONG_EMAIL_FIELD,
} from './actionTypes';

export const setWrongUserField = (isWrongUser) => ({
  type: SET_WRONG_USER_FIELD,
  isWrongUser,
});

export const setWrongEmailField = (isWrongEmail) => ({
  type: SET_WRONG_EMAIL_FIELD,
  isWrongEmail,
});
