import { createReducer } from 'redux-create-reducer';

// Actions.
import { ADD_TOAST, REMOVE_TOAST } from '../constants/actions';

// Helpers.
import { array } from '../utils/';

const initialState = [];

const actionHandlers = {
  [ADD_TOAST]: (state, action) => ([
    ...state, {
      id: action.id,
      type: action.type,
      message: action.message,
    },
  ]),
  [REMOVE_TOAST]: (state, { id }) => {
    const index = array.findIndexById(state, { id });
    if (index >= 0) {
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];
    }
    return state;
  },
};

export default createReducer(initialState, actionHandlers);
