import { createReducer } from 'redux-create-reducer';

// Actions.
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
} from '../constants/actions';

const initialState = {
  data: null,
  rememberMe: false,
  isAuthenticated: false,
};

const actionHandlers = {
  [LOGIN_REQUEST]: (state, { rememberMe }) => ({
    ...state,
    rememberMe,
  }),
  [LOGIN_SUCCESS]: (state, { payload }) => ({
    data: payload.user,
    isAuthenticated: true,
  }),
  [LOGIN_FAILED]: () => (initialState),
  [LOGOUT_SUCCESS]: () => (initialState),
};

export default createReducer(initialState, actionHandlers);
