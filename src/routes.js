import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  Main,
  Index,
  NotFoundPage,
} from './components/';

const routes = (
  <Route path="/" component={Main}>
    <IndexRoute component={Index} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;
