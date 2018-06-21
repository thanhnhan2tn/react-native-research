import colors from 'styles/colors';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
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
    backgroundColor: '#FBBE00',
    marginTop: 10,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    borderRadius: 3,
  },
  iconMap: {
    width: 25,
    height: 25,
  },
  containerIconMap: {
    backgroundColor: 'red',
    zIndex: 10,
    borderRadius: 30,
    overflow: 'hidden',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    left: '50%',
    position: 'absolute',
  },
});

export default styles;
