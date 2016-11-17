import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStoreWithMiddleware from '../config/configure-store';
import AppRouter from './app-router';
import reducer from './reducers/';
import { MOUNT_ID } from '../config/constants';
import { ENV } from '../config/env';

const mountNode = document.getElementById(MOUNT_ID);
const store = createStoreWithMiddleware({
  reducer,
  history: browserHistory,
  initialState: window.__PRELOADED_STATE__,
});
const history = syncHistoryWithStore(browserHistory, store);

const rootComponent = (
  <Provider store={store}>
    <AppRouter history={history} store={store} />
  </Provider>
);

if (ENV !== 'production') {
  if (!mountNode ||
    !mountNode.firstChild ||
    !mountNode.firstChild.attributes ||
    !mountNode.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

window.onload = () => {
  // First render to match markup from server
  ReactDOM.render(rootComponent, mountNode);

  // // dev-tools render (optional)
  // ReactDOM.render((
  //   <div>
  //     {rootComponent}
  //     <DebugPanel top right bottom>
  //       <DevTools store={store} monitor={LogMonitor} />
  //     </DebugPanel>
  //   </div>
  // ), mountNode);
};
