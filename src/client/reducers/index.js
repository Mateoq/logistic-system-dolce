import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// Reducers.
import counter from './counter';
import user from './user';
import toastList from './toast-list-reducer';
import loading from './loading';
import loginForm from './login-form';
import dashboard from './dashboard-reducer';
import packageReception from './package-reception';

export default combineReducers({
  routing: routerReducer,
  user,
  toastList,
  loading,
  loginForm,
  dashboard,
  packageReception,
  counter,
});
