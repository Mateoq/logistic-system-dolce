import { Observable } from 'rxjs';
import { routerActions } from 'react-router-redux';

// Constants.
import { DASHBOARD } from '../constants/routes';
import { LOGIN_REQUEST } from '../constants/actions';

// Actions.
import { showLoading, hideLoading } from '../actions/loading-actions';
import { loginSuccess, loginFailed } from '../actions/user-actions';

// API services.
import { callFetchUser } from '../utils/api-service-creators';

const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST)
    .mergeMap(action => (
      Observable.ajax
        .getJSON(callFetchUser(action.payload))
        .delay(3000)
        .concatMap(payload => (
          Observable.of(
            loginSuccess(payload),
            hideLoading(),
            routerActions.push(DASHBOARD),
          )
        ))
        .catch(err => (
          Observable.of(loginFailed(err), hideLoading()))
        )
        .startWith(showLoading())
    ));

export default loginEpic;
