import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageBackground: {
    height: 250,
    width: '100%',
    backgroundColor: colors.red
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: colors.white,
    marginTop: 80,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  textTitle: {
    fontSize: 22,
    color: colors.white,
  },
  labelContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  textLabel: {
    fontSize: 14,
    color: colors.white,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    borderWidth: 2,
    borderColor: colors.red,
    borderRadius: 8,
    marginTop: 15,
  },
  buttonContainer: {
    flex: 1,
  },
  selectedButtonContainer: {
    flex: 1,
    backgroundColor: colors.red
  },
  buttonText: {
    color: colors.red,
    textAlign: 'center',
    margin: 7,
  },
  selectedButtonText: {
    color: colors.white,
    textAlign: 'center',
    margin: 7
  },
  verticalLine: {
    width: 2,
    marginTop: -7,
    marginBottom: -7,
    backgroundColor: colors.red,
  },
  bottomView: {
    flex: 1,
  }
});