import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150
  },
  content: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 100
  },
  bold: {
    fontWeight: 'bold'
  },
  colorRed: {
    color: '#c91000'
  },
  colorDark: {
    color: '#000'
  }
});
