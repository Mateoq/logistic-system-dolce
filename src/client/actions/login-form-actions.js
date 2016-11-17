// Constants.
import {
  UPDATE_USERNAME,
  UPDATE_PASSWORD,
  TOGGLE_REMEMBERME,
} from '../constants/actions';

export const updateUsername = username => ({ type: UPDATE_USERNAME, username });

export const updatePassword = password => ({ type: UPDATE_PASSWORD, password });

export const toggleRememberMe = () => ({ type: TOGGLE_REMEMBERME });
