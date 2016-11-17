import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createEpicMiddleware } from 'redux-observable';
import createLogger from 'redux-logger';

// Constants.
import { ENV } from './env';
// import { CLIENT_ENV } from './constants';

// Epic.
import rootEpic from '../client/epics/';

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
 }) {
  const reduxRouterMiddleware = routerMiddleware(history);

  const middleware = [reduxRouterMiddleware];

  if (__CLIENT__) {
    const epicMiddleware = createEpicMiddleware(rootEpic);
    middleware.push(epicMiddleware, createLogger());
  }

  const createStoreWrapper = applyMiddleware(...middleware)(createStore);

  const store = createStoreWrapper(reducer, initialState);

  if (ENV === 'development' && module.hot) {
    module.hot.accept('../client/reducers', () => {
      const nextRootReducer = require('../client/reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default createStoreWithMiddleware;
