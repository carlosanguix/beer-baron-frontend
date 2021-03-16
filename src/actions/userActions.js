import {
    SET_USER
} from './actionTypes';

import API from '../api';

export const signIn = (nameOrEmail, password) => async (dispatch) => {
    console.log(nameOrEmail, password);
    await API.signIn({ nameOrEmail, password });
    // const res = fetch()
};