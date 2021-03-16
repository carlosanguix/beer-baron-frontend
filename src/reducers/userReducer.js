import SET_USER from '../actions/actionTypes';

const initialState = {
  isLogged: false,
  name: '',
  email: '',
  loadingUser: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return { ...state, ...action };
    }
    default:
      return { ...state };
  }
};

export const readUser = (state) => ({ ...state.userReducer });

export default reducer;
