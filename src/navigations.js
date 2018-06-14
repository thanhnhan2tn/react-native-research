import { createStackNavigator } from 'react-navigation';
import { Animated, Easing } from 'react-native';

import HomeScreen from './containers/Home';
import DetailsScreen from './containers/Details';

export default createStackNavigator({
  home: HomeScreen,
  details: DetailsScreen,
},{
  initialRouteName: 'home',
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 500,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
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
