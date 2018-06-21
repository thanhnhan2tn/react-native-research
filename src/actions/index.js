import { INCRE_COUNTER, DECRE_COUNTER } from './actionTypes';

export const incrementAction = () => ({
  type: INCRE_COUNTER,
});

export const decrementAction = () => ({
  type: DECRE_COUNTER,
});
