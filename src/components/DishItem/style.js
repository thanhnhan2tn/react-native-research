import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 10,
  },
  imageContainer: {
    flex: 2,
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  image: {
    width: 70,
    height: 70,
  },
  contentContainer: {
    marginLeft: 10,
    flex: 6
  },
  textTitle: {
    fontSize: 16,
    color: colors.black,
  },
  textDescribe: {

  },
  priceContainer: {
    flex: 2,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textPrice: {
    fontSize: 17,
    color: colors.red,
  },
  icon: {
    color: colors.red,
  }
})