import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 0.1,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  menu: {
    width: 40,
    height: 40,
  },
  cartIcon: {
    width: 40,
    height: 40,
  },
  title: {
    color: colors.white,
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
