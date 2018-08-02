import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapBackground: {
    width: '100%',
    height: '100%',
  },

  wrapOverlay: {
    position: 'absolute',
    top: 65,
    right: 0,
    left: 0,
    bottom: 0,
  },

  wrapBanner: {
    flex: 1,
  },

  wrapTabView: {
    flex: 2,
  },

  wrapTab: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'red',
    width: '94%',
    marginLeft: '3%',
    borderRadius: 5,
  },

  active: {
    backgroundColor: 'red',
    height: '100%',
  },

  tabItem: {
    borderRightColor: 'red',
    borderRightWidth: 1,
    width: 113,
  },

  label: {
    textAlign: 'center',
  },
});
export default styles;
