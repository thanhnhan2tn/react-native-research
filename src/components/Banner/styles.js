import { StyleSheet } from 'react-native';

import { rgba } from 'utils/helpers';
import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    height: 150,
  },
  content: {
    backgroundColor: rgba(colors.dark, 0.4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
  },
  bold: {
    fontWeight: 'bold',
  },
  colorRed: {
    color: colors.red3,
  },
  colorDark: {
    color: colors.dark,
  },
});
