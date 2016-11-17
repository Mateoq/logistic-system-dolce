import React from 'react';
import { Route, IndexRoute } from 'react-router';

// Auth.
import {
  userIsNotAuthenticated,
  userIsAuthenticated,
} from '../client/utils/config/configure-user-auth';

// Components.
import {
  App,
  LoginContainer,
  Dashboard,
  PackageReception,
  RoutesAssign,
  Counter,
 } from '../client/containers/';
import { NotFound } from '../client/components/';

// Routes
import * as routes from '../client/constants/routes';

const getRoutes = (store) => {
  const connect = fn => (nextState, replaceState) => fn(store, nextState, replaceState);

  return (
    <Route path={routes.DASHBOARD} component={App}>
      <IndexRoute
        component={userIsAuthenticated(Dashboard)}
        onEnter={connect(userIsAuthenticated.onEnter)}
      />
      <Route
        path={routes.LOGIN}
        component={userIsNotAuthenticated(LoginContainer)}
        onEnter={connect(userIsNotAuthenticated.onEnter)}
      />
      <Route
        path={routes.PACKAGE_RECEPTION}
        component={userIsAuthenticated(PackageReception)}
        onEnter={connect(userIsAuthenticated.onEnter)}
      />
      <Route
        path={routes.ROUTES_ASSIGN}
        component={userIsAuthenticated(RoutesAssign)}
        onEnter={connect(userIsAuthenticated.onEnter)}
      />
      <Route
        path={routes.COUNTER}
        component={userIsAuthenticated(Counter)}
        onEnter={connect(userIsAuthenticated.onEnter)}
      />
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};

export default { getRoutes };
