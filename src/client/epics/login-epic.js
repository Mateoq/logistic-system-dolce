import { Observable } from 'rxjs';
import { routerActions } from 'react-router-redux';

// Actions.
import { addToast, removeToast } from '../actions/toast-list-actions';
import { showLoading, hideLoading } from '../actions/loading-actions';
import { loginSuccess, loginFailed } from '../actions/user-actions';

// API services.
import { callFetchUser } from '../utils/api-service-creators';

// Constants.
import { DASHBOARD } from '../constants/routes';
import { LOGIN_REQUEST } from '../constants/actions';
import { ERROR, BRAND } from '../constants/types';

const loginSuccessEpic = (payload) => {
  const toast = addToast({ type: BRAND, message: 'Bienvienido' });
  return Observable.merge(
    Observable.of(loginSuccess(payload)),
    Observable.of(
      routerActions.push(DASHBOARD),
      hideLoading(),
      toast
    ),
    Observable.of(removeToast(toast.message.id))
      .delay(6000)
  );
};

const loginFailEpic = (err) => {
  const toast = addToast({ type: ERROR, message: err.message });
  return Observable.merge(
    Observable.of(
      loginFailed(err),
      hideLoading(),
      toast
    ),
    Observable.of(removeToast(toast.message.id))
      .delay(6000)
  );
};

const loginEpic = action$ =>
  action$.ofType(LOGIN_REQUEST)
    .mergeMap(action => (
      Observable.ajax
        .getJSON(callFetchUser(action.payload))
        .delay(3000)
        .concatMap(payload => (loginSuccessEpic(payload)))
        .catch(err => (loginFailEpic(err)))
        .startWith(showLoading())
    ));

export default loginEpic;
