import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
    alignItems: 'center',
    height: 40,
  },
  buttonText: {
    color: colors.grey2,
    fontWeight: 'bold',
  },
  image: {
    width: 20,
    height: 20,
  },
});
