import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { ENV } from './env';
import { CLIENT_ENV } from './constants';

/* Create a wrapped redux store with middleware
 * @param {object} history - Browser history.
 * @param {object} reducer - App reducer.
 * @param {object} initialState - (optional) Initial state if exists.
 * @returns {object} - Redux store.
 */
function createStoreWithMiddleware({
  history,
  reducer,
  initialState,
  appEnv,
 }) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [reduxRouterMiddleware];

  if (appEnv === CLIENT_ENV) {
    middleware.push(thunkMiddleware, createLogger());
  }

  const createStoreWrapper = applyMiddleware(...middleware)(createStore);

  const store = createStoreWrapper(reducer, initialState);

  if (ENV === 'development' && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default createStoreWithMiddleware;
