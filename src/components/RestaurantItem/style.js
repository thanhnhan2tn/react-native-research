import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    padding: 5,
    backgroundColor: '#ffffff',
  },
  imageContainer: {
    flex: 2,
    margin: 10,
    borderWidth: 1,
    width: 70,
    height: 70,
    borderColor: colors.gray,
  },
  image: {
    width: 70,
    height: 70,
  },
  contentContainer: {
    flex: 8,
    flexDirection: 'column',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 15,
    margin: 10,
    marginRight: 0,
    color: colors.black,
    flex: 6,
  },
  ratingBar: {
    margin: 10,
    alignSelf: 'center',
    alignItems: 'center',
    flex: 4,
    flexDirection: 'row',
  },
  label: {
    margin: 10,
    marginTop: -10,
  },
  otherInformation: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  otherInformationItem: {
    flexDirection: 'row',
    marginRight: 20,
  },
  otherInformationText: {
    fontStyle: 'italic',
    fontSize: 12,
  },
});
