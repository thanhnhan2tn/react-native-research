import { combineReducers } from 'redux';
import NavigationReducer from './navigationReducer';
import CounterReducer from './counterReducer';
import restaurantReducer from './restaurantReducer';

const AppReducer = combineReducers({
  nav: NavigationReducer,
  CounterReducer,
  restaurantReducer,
});

export default AppReducer;
