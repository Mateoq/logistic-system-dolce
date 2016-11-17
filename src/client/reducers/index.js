import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import counter from './counter';
import user from './user';
import loading from './loading';
import loginForm from './login-form';
import packageReception from './package-reception';

export default combineReducers({
  routing: routerReducer,
  user,
  loading,
  loginForm,
  packageReception,
  counter,
});
