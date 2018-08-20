import { StyleSheet } from 'react-native';

import colors from '../../styles/colors';

export default StyleSheet.create({
  wrapper: {
    flex: 0.1,
    backgroundColor: colors.transparentRed,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
  },
  menu: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  cartIcon: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
  title: {
    color: colors.white,
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5,
  },
  titleLeftRight: {
    color: colors.white,
    fontSize: 18,
    marginTop: 10,
    height: 30,
    alignSelf: 'center',
  },
  btnLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: 80,
  },
  btnRight: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    width: 80,
  },
});
