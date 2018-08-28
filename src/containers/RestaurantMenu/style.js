import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../styles/colors';
const DEVICE_HEIGHT = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    // height: (DEVICE_HEIGHT - 250),
  },
})