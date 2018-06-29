import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    alignItems: 'center',
    borderBottomColor: colors.gray,
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },

  orderInfo: {
    flex: 3,
    flexDirection: 'column',
    paddingLeft: 14,
    justifyContent: 'center',
  },

  counterContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 14,
  },

  counterWrap: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textName: {
    fontSize: 16,
    color: colors.black,
  },

  textPrice: {
    fontSize: 18,
    color: colors.red1,
  },

  textQuantity: {
    fontSize: 18,
    color: colors.black,
  },
});

