import shortid from 'shortid';

// Constants.
import { ADD_TOAST, REMOVE_TOAST } from '../constants/actions';

export const addToast = message => ({
  type: ADD_TOAST,
  message: {
    id: shortid.generate(),
    ...message,
  },
});

export const removeToast = id => ({ type: REMOVE_TOAST, id });
