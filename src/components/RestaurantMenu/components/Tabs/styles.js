import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  tabsContainer: {
    flexDirection: 'row',
    width: '94%',
    borderColor: 'rgba(200,0,0,1)',
    borderWidth: 1,
    alignSelf: 'center',
  },

  tabContainer: {
    flex: 1,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'rgba(200,0,0,1)',
  },

  tabActive: {
    backgroundColor: 'rgba(200,0,0,1)',
  },

  textActive: {
    color: 'white',
  },

  tabText: {
    color: 'red',
    textAlign: 'center',
    padding: 10,
    fontSize: 13,
  },

  contentContainer: {
    flex: 1,
  },
});
export default styles;
