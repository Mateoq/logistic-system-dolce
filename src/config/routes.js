import React from 'react';
import { Route, IndexRoute } from 'react-router';
import {
  App,
  Index,
  NotFoundPage,
} from '../components/';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);
