import { fromJS } from 'immutable';
import { incrementCounter, decrementCounter } from 'actions/actionTypes';

const initialState = fromJS({
  counter: 0,
});

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case incrementCounter:
      return state.set('counter', state.get('counter') + 1);
    case decrementCounter:
      return state.set('counter', state.get('counter') - 1);
    default:
      return state;
  }
};

export default counterReducer;
