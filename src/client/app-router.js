import React, { PropTypes } from 'react';
import { Router } from 'react-router';
import routes from '../config/routes';

const AppRouter = ({ history, store }) => (
  <Router
    history={history}
    routes={routes.getRoutes(store)}
    onUpdate={() => { window.scrollTo(0, 0); }}
  />
);

AppRouter.propTypes = {
  history: PropTypes.shape().isRequired,
  store: PropTypes.shape().isRequired,
};

export default AppRouter;
