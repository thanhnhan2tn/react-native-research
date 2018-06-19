import { fromJS } from 'immutable';
import { incrementCounter, decrementCounter } from "actions/actionTypes";

const initialState = fromJS({
  counter: 0,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      const prev = state.get('counter');
      return state.set('counter', prev + 1);
    case decrementCounter:
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
};

export default counterReducer;
