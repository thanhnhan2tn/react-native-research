import { combineReducers } from 'redux';
import NavigationReducer from './navigationReducer';
import CounterReducer from './counterReducer';
import MainScreenReducer from './mainScreenReducer';
import FeedbackReducer from './feedbackReducer';

const AppReducer = combineReducers({
  nav: NavigationReducer,
  CounterReducer,
  MainScreenReducer,
  FeedbackReducer,
});

export default AppReducer;
