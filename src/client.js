import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose } from 'redux';
import { ReduxRouter, reduxReactRouter } from 'redux-router';
import { Provider } from 'react-redux';
import { devTools } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import createHistory from 'history/lib/createBrowserHistory';



window.onload = () => {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById('root')
  );
};
