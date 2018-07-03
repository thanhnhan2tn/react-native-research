import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.grey2,
    padding: 10,
    alignItems: 'center',
  },
  text: {
    flex: 1,
    color: colors.white,
    paddingLeft: 10,
  },
  image: {
    height: 30,
  },
});
