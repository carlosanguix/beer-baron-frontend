import {
  SET_USER_LOADING,
  SET_USER_LOGGED,
  SET_USER_DATA,
} from './actionTypes';
import {
  addErrorNotification,
  addSuccessNotification,
} from './notifierActions';
import API from '../api';

const setUserLoading = (isLoading) => ({
  type: SET_USER_LOADING,
  isLoading,
});

const setLogged = (logged) => ({
  type: SET_USER_LOGGED,
  logged,
});

const setUser = (user) => ({
  type: SET_USER_DATA,
  user,
});

export const signIn = (nameOrEmail, password) => async (dispatch) => {
  dispatch(setUserLoading(true));
  const response = await API.signIn({ nameOrEmail, password });

  dispatch(setLogged(response.success));
  dispatch(setUserLoading(false));

  if (response.success) {
    dispatch(addSuccessNotification('You have been logged in.'));
  } else {
    dispatch(addErrorNotification(response.msg));
  }
};

export const whoAmI = () => async (dispatch) => {
  const response = await API.whoAmI();
  if (response.auth) {
    dispatch(setUser(response.user));
    dispatch(setLogged(true));
  }
};
