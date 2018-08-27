import { fromJS } from 'immutable';
import { FETCH_RESTAURANTS_SUCCESS } from 'actions/actionTypes';

const inititalState = fromJS({
  restaurants: [],
});

const mainScreenReducer = (state = inititalState, action) => {
  switch (action.type) {
    case FETCH_RESTAURANTS_SUCCESS:
      return state.set('restaurants', action.payload.data);
    default:
      return state;
  }
}

export default mainScreenReducer;
