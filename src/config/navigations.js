import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import { Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

import Header from 'components/Header';
import DrawerItem from 'components/DrawerItem';
import FeedBack from 'containers/FeedBack';
import HomeScreen from 'containers/Home';
import DetailsScreen from 'containers/Details';
import TabViewDemo from 'containers/TabViewDemo';
import RestaurantInfo from 'containers/RestaurantInfo';
import MyCart from 'containers/MyCart';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const stackNavigator = createStackNavigator({
  home: HomeScreen,
  details: DetailsScreen,
  feedback: FeedBack,
  tabview: TabViewDemo,
  restaurantInfo: RestaurantInfo,
  Cart: MyCart,
}, {
  headerMode: 'float',
  navigationOptions: {
    header: props => <Header {...props} isIconMenu={true} />,
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

const RootNavigator = createDrawerNavigator({
  home: stackNavigator,
}, {
  contentComponent: DrawerItem,
});

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigator, middleware };
export default AppNavigator;
