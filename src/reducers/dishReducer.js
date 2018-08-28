import { Map, List } from 'immutable';
import { GET_DISH_SUCCESS, GET_DISH_ERROR } from '../actions/actionTypes';
const initialState = Map({
  listDish: List([]),
});

const dishReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DISH_SUCCESS:
      return state.set('listDish', action.payload.listDish);
    case GET_DISH_ERROR:
      return state.set('listDish', []);
    default:
      return state;
  }
};
export default dishReducer;
