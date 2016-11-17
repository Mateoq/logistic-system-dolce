import { createReducer } from 'redux-create-reducer';

// Actions.
import { SHOW_LOADING, HIDE_LOADING } from '../constants/actions';

const initialState = { isLoading: false };

const actionHandlers = {
  [SHOW_LOADING]: () => ({ isLoading: true }),
  [HIDE_LOADING]: () => ({ isLoading: false }),
};

export default createReducer(initialState, actionHandlers);
