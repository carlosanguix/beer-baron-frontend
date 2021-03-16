import {
  ADD_NOTIFICATION,
} from './actionTypes';

export const addSuccessNotification = (msg) => ({
  type: ADD_NOTIFICATION,
  notification: {
    msg,
    variant: 'success',
  },
});

export const addErrorNotification = (msg) => ({
  type: ADD_NOTIFICATION,
  notification: {
    msg,
    variant: 'error',
  },
});
