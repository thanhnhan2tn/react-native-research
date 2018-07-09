import { StyleSheet } from 'react-native';

import colors from 'styles/colors';
import { rgba } from 'utils/helpers';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: rgba(colors.red, 0.85),
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
    width: 30,
    height: 30,
  },
  cartIcon: {
    width: 30,
    height: 30,
  },
  title: {
    color: colors.white,
    fontFamily: 'Montserrat',
    fontSize: 20,
  },
  titleSmall: {
    color: colors.white,
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  color: {
    color: '#fff',
  },
});
