import { createSelector } from 'reselect';

const getItems = state => state.restaurantReducer;

export const selectRestaurants = createSelector(
  getItems,
  item => item.get('listRestaurant'),
);

export default getItems;
