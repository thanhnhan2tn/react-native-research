import { createSelector } from 'reselect';

const getMain = state => state.MainScreenReducer;

export const selectRestaurant = createSelector(
  getMain,
  substate => substate.get('restaurants'),
);

export default getMain;
