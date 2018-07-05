import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },

  amountWrapper: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10,
  },

  totalText: {
    color: colors.black,
    fontSize: 16,
    fontWeight: '300',
  },

  amountText: {
    color: colors.red1,
    fontSize: 18,
    fontWeight: '300',
  },

  btnWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnCheckout: {
    width: '80%',
    borderRadius: 5,
    backgroundColor: colors.red1,
    alignItems: 'center',
    paddingVertical: 10,
  },

  checkoutText: {
    fontSize: 18,
    color: colors.white,
  },
});
