import { combineReducers } from "redux";
import NavigationReducer from "./navigationReducer";
import CounterReducer from './counterReducer';

const AppReducer = combineReducers({
  nav: NavigationReducer,
  CounterReducer,
});

export default AppReducer;