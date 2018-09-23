import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../navigations';

const firstAction = RootNavigator.router.getActionForPathAndParams('home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

function navigationReducer(state = initialNavState, action) {
  let nextState;
  switch (action.type) {
    case 'auth':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'auth', params: { text: action.text } }),
        state,
      );
      break;
    case 'detail':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'details', params: { text: action.text } }),
        state,
      );
      break;
    case 'home':
      nextState = RootNavigator.router.getStateForAction(
        NavigationActions.back(),
        state,
      );
      break;
    default:
      nextState = RootNavigator.router.getStateForAction(action, state);
      break;
  }

  return nextState || state;
}

export default navigationReducer;
