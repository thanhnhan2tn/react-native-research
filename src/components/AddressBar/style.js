import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F0EB',
  },
  addressContainer: {
    flexDirection: 'column',
  },
  textCity: {
    color: colors.red,
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 10,
  },
  textStreet: {
    fontSize: 17,
  },
  iconLeft: {
    margin: 20,
  },
  iconRight: {
    margin: 20,
  },
});
