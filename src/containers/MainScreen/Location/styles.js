import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey1,
    paddingVertical: 5,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  wrap: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  image: {
    width: 28,
    height: 28,
  },
  colorRed: {
    color: colors.red,
  },
  textBold: {
    fontWeight: 'bold',
  },
});
