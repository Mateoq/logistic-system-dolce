import { createReducer } from 'redux-create-reducer';

import { INCREMENT, DECREMENT } from '../constants/actions';

const initialState = 0;

const actionHandlers = {
  [INCREMENT]: state => (state + 1),
  [DECREMENT]: state => (state - 1),
};

export default createReducer(initialState, actionHandlers);
