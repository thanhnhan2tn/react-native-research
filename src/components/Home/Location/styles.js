import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 150,
    left: 20,
    right: 20,
  },

  wrappForm: {
    backgroundColor: 'white',
    width: '100%',
  },

  dropdown: {
    borderWidth: 1,
    borderColor: 'blue',
    height: 45,
    marginRight: 15,
    marginLeft: 10,
  },

  textDropDown: {
    fontSize: 10,
  },

  wrapInput: {
    height: 45,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingTop: 10,
    paddingLeft: 5,
    marginHorizontal: 15,
  },

  button: {
    marginTop: 5,
  },

  buttonText: {
    padding: 12,
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
  },
});
export default styles;
