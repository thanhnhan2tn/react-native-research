import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 20
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  image: {
   width: 20,
   height: 20
  },
  text: {
    padding: 5,
    color: '#fff'
  },
  reverse: {
    flexDirection: 'row-reverse',
  }
});
