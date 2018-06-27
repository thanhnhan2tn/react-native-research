import { incrementCounter, decrementCounter } from './actionTypes';

export const incrementAction = () => ({
  type: incrementCounter,
});

export const decrementAction = () => ({
  type: decrementCounter,
});
