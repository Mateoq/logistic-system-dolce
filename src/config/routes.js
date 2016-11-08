import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  Login,
  Dashboard,
  PackageReception,
  RoutesAssign,
  Counter,
 } from '../containers/';
import { NotFound } from '../components/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/login" component={Login} />
    <Route path="/packageReception" component={PackageReception} />
    <Route path="/routesAssign" component={RoutesAssign} />
    <Route path="/counter" component={Counter} />
    <Route path="*" component={NotFound} status={404} />
  </Route>
);
