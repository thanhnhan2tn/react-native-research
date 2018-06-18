import React from 'react';
import { createStackNavigator, DrawerNavigator, StackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import HomeScreen from 'containers/Home';
import DetailsScreen from 'containers/Details';
import Header from 'components/Header';

import colors from 'styles/colors';

const withHeader = (screen, routeName) => (
  StackNavigator(
    { [routeName]: { screen } },
    {
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
    },
  )
);

// const Stack = StackNavigator({
//   home: HomeScreen,
//   details: DetailsScreen,
// }, {
//   // initialRouteName: 'home',
//   headerMode: 'float',
//   navigationOptions: {
//     header: props => <Header {...props} />,
//   },
//   transitionConfig: () => ({
//     transitionSpec: {
//       duration: 500,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: (sceneProps) => {
//       const { layout, position, scene } = sceneProps;
//       const { index } = scene;

//       const width = layout.initWidth;
//       const translateX = position.interpolate({
//         inputRange: [index - 1, index, index + 1],
//         outputRange: [width, 0, 0],
//       });

//       const opacity = position.interpolate({
//         inputRange: [index - 1, index],
//         outputRange: [0, 1],
//       });

//       return { opacity, transform: [{ translateX }] };
//     },
//   }),
// });

const routes = {
  'home': withHeader(HomeScreen, 'home'),
  'details': withHeader(DetailsScreen, 'details'),
};

const drawer = DrawerNavigator(routes,{
  initialRouteName: 'home'
});

export default drawer;
