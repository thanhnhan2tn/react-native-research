import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  addressbar: {
    marginTop: 80,
  },
  listRestaurant: {

  },
  lastView: {
    position: 'absolute',
    padding: 15,
    height: 50,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.transparentWhite,
  },
});
