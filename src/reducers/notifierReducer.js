import { ADD_NOTIFICATION } from '../actions/actionTypes';

const reducer = (state = { notification: null }, action) => {
  switch (action.type) {
    case ADD_NOTIFICATION:
      return { notification: action.notification };
    default:
      return state;
  }
};

export const readNotification = (state) => state.notifierReducer.notification;

export default reducer;
