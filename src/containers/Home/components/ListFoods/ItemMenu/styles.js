import colors from 'styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  itemMenuFlatlist: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.white,
    borderBottomColor: '#cdcdcd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconMenu: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  titleItemMenu: {
    color: colors.red,
  },
});

export default styles;
