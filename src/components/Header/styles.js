import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(200,0,0,0.8)',
    position: 'absolute',
    top: 25,
    right: 0,
    left: 0,
    height: 40,
  },

  iconHeader: {
    width: 20,
    height: 20,
    margin: 10,
  },

  iconLogo: {
    width: 25,
    height: 25,
  },

  iconBack: {
    width: 10,
    height: 20,
    margin: 10,
  },

  wrapBack: {
    display: 'flex',
    flexDirection: 'row',
  },

  textBack: {
    paddingLeft: 0,
    paddingRight: 10,
    paddingVertical: 10,
  },

  title: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  textWhite: {
    color: 'white',
  },

  textBig: {
    fontSize: 18,
  },

  textLeft: {
    padding: 10,
  },

  textRight: {
    paddingRight: 10,
  },

  hidden: {
    display: 'none',
  },

  blockContainer: {
    display: 'flex',
  },
});
export default styles;
