import colors from 'styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  containerForm: {
    paddingHorizontal: 15,
    width: '100%',
    paddingBottom: 20,
  },
  containerTextInput: {
    paddingHorizontal: 10,
    backgroundColor: colors.white,
  },
  textInputBorder: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: colors.gray,
  },
  textInput: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    borderStyle: 'solid',
    paddingHorizontal: 10,
  },
  btnSearch: {
    backgroundColor: colors.yellow,
    marginTop: 10,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    borderRadius: 3,
  },
  iconMap: {
    width: 20,
    height: 20,
  },
  containerIconMap: {
    position: 'absolute',
    left: '50%',
    backgroundColor: colors.red1,
    zIndex: 10,
    borderRadius: 30,
    overflow: 'hidden',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ translateX: -15 }],
  },
  picker: {
    height: 45,
  },
  itemPicker: { // only run on ios
    height: 45,
    lineHeight: 45,
  },
});

export default styles;
