import { Map } from 'immutable';
import { GET_LIST_RESTAURANT_SUCCESS, GET_LIST_RESTAURANT_ERROR } from '../actions/actionTypes';

const initialState = Map({
  // listRestaurant: List(),
});
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_RESTAURANT_SUCCESS:
      return state.set('listRestaurant', action.payload.listRestaurant);
    case GET_LIST_RESTAURANT_ERROR:
      return state.set('listRestaurant', []);
    default:
      return state;
  }
};
export default restaurantReducer;
