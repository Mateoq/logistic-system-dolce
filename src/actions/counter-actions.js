import {
  INCREMENT,
  DECREMENT,
} from '../config/constants';

export const incrementCounter = () => ({ type: INCREMENT });

export const decrementCounter = () => ({ type: DECREMENT });
