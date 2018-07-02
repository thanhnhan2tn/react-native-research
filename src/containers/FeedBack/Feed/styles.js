import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
  },
  body: {
    height: 35.5,
    overflow: 'hidden',
  },
  bold: {
    fontWeight: 'bold',
  },
  feed: {
    flex: 1,
  },
  sizeImg: {
    width: 40,
    height: 40,
    borderRadius: 15,
    paddingLeft: 10,
  },
  marginTop: {
    marginTop: 5,
  },
});
