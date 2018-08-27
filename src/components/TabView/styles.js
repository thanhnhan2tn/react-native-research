import { StyleSheet } from 'react-native';
import colors from 'styles/colors';

export default StyleSheet.create({
  tabBar: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row',
  },

  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: colors.red1,
    paddingVertical: 10,
  },
})
