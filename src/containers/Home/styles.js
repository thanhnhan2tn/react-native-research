import { StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
