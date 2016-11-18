import { createReducer } from 'redux-create-reducer';

// Constants.
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  TOGGLE_REMEMBERME,
  LOGIN_SUCCESS,
} from '../constants/actions';

const initialState = {
  username: '',
  password: '',
  rememberMe: false,
};

const actionHandlers = {
  [UPDATE_USERNAME]: (state, { username }) => ({
    ...state,
    username,
  }),
  [UPDATE_PASSWORD]: (state, { password }) => ({
    ...state,
    password,
  }),
  [TOGGLE_REMEMBERME]: state => ({
    ...state,
    rememberMe: !state.rememberMe,
  }),
  [LOGIN_SUCCESS]: () => (initialState),
};

export default createReducer(initialState, actionHandlers);
