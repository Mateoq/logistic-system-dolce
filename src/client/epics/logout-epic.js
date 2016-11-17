import { Observable } from 'rxjs';
import { routerActions } from 'react-router-redux';

// Actions.
import { logoutSuccess } from '../actions/user-actions';
import { showLoading, hideLoading } from '../actions/loading-actions';

// Constants
import { LOGOUT_REQUEST } from '../constants/actions';

// Routes.
import { LOGIN } from '../constants/routes';

// API services.
import { destroyUserSession } from '../utils/api-service-creators';

const logoutEpic = action$ =>
  action$.ofType(LOGOUT_REQUEST)
    .mergeMap(() => (
      Observable.ajax
        .post(destroyUserSession())
        .delay(3000)
        .concatMap(() => (
          Observable.of(
            logoutSuccess(),
            routerActions.push(LOGIN),
            hideLoading()
          )
        ))
        .startWith(showLoading())
    ));

export default logoutEpic;
