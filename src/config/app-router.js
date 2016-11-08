import React from 'react';
import { Router } from 'react-router';
import routes from './routes';

const AppRouter = ({ history }) => (
  <Router
    history={history}
    routes={routes}
    onUpdate={() => { window.scrollTo(0, 0); }}
  />
);

AppRouter.propTypes = {
  history: React.PropTypes.shape().isRequired,
};

export default AppRouter;
