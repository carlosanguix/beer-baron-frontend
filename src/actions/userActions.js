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

  try {
    const response = await API.signIn({ nameOrEmail, password });

    dispatch(setLogged(response.success));
    dispatch(setUserLoading(false));

    if (response.success) {
      dispatch(addSuccessNotification('You have been logged in.'));
    } else {
      dispatch(addErrorNotification(response.msg));
    }
  } catch (e) {
    dispatch(addErrorNotification(e.message));
  }

  dispatch(setUserLoading(false));
};

export const signUp = (username, email, password, repeatPassword) => async (dispatch) => {
  dispatch(setUserLoading(true));
  let res;

  try {
    res = await API.signUp({
      username, email, password, repeatPassword,
    });

    if (res.success) {
      dispatch(addSuccessNotification('You have been registered.'));
    } else {
      dispatch(addErrorNotification(res.msg));
    }
  } catch (e) {
    dispatch(addErrorNotification(e.message));
  }

  dispatch(setUserLoading(false));
  return res;
};

export const whoAmI = () => async (dispatch) => {
  const response = await API.whoAmI();
  if (response.auth) {
    dispatch(setUser(response.user));
    dispatch(setLogged(true));
  }
};
