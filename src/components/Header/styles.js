import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  menu: {
    width: 30,
    height: 30,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  title: {
    color: colors.white,
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textLeft: {
    color: '#fff',
  }
});
