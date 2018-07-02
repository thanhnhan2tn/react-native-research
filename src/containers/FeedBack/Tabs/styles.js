import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  color: {
    color: colors.red3,
  },
  active: {
    borderBottomWidth: 3,
    borderBottomColor: colors.red3,
  },
});
