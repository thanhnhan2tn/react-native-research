import { createSelector } from 'reselect';

const getItems = state => state.dishReducer;

export const selectListDish = createSelector(
  getItems,
  item => item.get('listDish'),
);

export default getItems;
