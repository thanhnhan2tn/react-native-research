import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  dotStyle: {
    backgroundColor: colors.gray,
  },
  selectedDot: {
    backgroundColor: '#000000'
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  pageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // width: 400,
    // height: 400,
  }
})