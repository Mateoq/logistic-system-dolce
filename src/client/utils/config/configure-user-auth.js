import { routerActions } from 'react-router-redux';
import { UserAuthWrapper } from 'redux-auth-wrapper';

// Constants.
import { DASHBOARD } from '../../constants/routes';

export const userIsAuthenticated = new UserAuthWrapper({ // eslint-disable-line new-cap
  authSelector: state => (state.user),
  redirectAction: routerActions.push,
  wrapperDisplayName: 'UserIsAuthenticated',
  predicate: user => (user.isAuthenticated),
});

export const userIsNotAuthenticated = new UserAuthWrapper({ // eslint-disable-line new-cap
  authSelector: state => (state.user),
  redirectAction: routerActions.push,
  wrapperDisplayName: 'UserIsNotAuthenticated',
  predicate: user => (!user.isAuthenticated),
  failureRedirectPath: () => (DASHBOARD),
});
