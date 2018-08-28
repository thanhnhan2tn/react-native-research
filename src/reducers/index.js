import { combineReducers } from 'redux';
import NavigationReducer from './navigationReducer';
import CounterReducer from './counterReducer';
import restaurantReducer from './restaurantReducer';
import dishReducer from './dishReducer';

const AppReducer = combineReducers({
  nav: NavigationReducer,
  CounterReducer,
  restaurantReducer,
  dishReducer,
});

export default AppReducer;
