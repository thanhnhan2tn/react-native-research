import React from 'react';
import { createStackNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

import HomeScreen from 'containers/Home';
import DetailsScreen from 'containers/Details';
import Header from 'components/Header';
import MainScreen from './containers/MainScreen';

import colors from 'styles/colors';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const RootNavigator = createStackNavigator({
  home: HomeScreen,
  details: DetailsScreen,
  mainscreen: MainScreen,
}, {
  initialRouteName: 'home',
  headerMode: 'float',
  navigationOptions: {
    header: props => <Header {...props} />,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: (sceneProps) => {
      const { layout, position, scene } = sceneProps;
      const { index } = scene;

      const width = layout.initWidth;
      const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0],
      });

      const opacity = position.interpolate({
        inputRange: [index - 1, index],
        outputRange: [0, 1],
      });

      return { opacity, transform: [{ translateX }] };
    },
  }),
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, middleware };
export default AppNavigator;
