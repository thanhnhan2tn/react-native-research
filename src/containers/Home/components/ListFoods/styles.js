import colors from 'styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contaier: {
    width: '100%',
  },
  containerMenuFlatList: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'column',
  },
  containerList: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  containerMenuList: {
    flex: 1,
  },
  containerFlatList: {
    width: '100%',
    marginTop: 10,
  },
  titleList: {
    fontSize: 17,
  },
});

export default styles;
