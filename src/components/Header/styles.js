import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: colors.red,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 25,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
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
    fontFamily: 'Montserrat',
    fontSize: 20,
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
