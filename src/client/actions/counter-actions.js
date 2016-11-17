import {
  INCREMENT,
  DECREMENT,
} from '../constants/actions';

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
