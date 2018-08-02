import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapFeed: {
    backgroundColor: '#d7ccc8',
    marginVertical: 10,
    padding: 10,
    height: '100%',
  },

  wrapComment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    minHeight: 60,
  },

  img: {
    width: 20,
    height: 20,
    flex: 1,
    marginRight: 10,
  },

  content: {
    fontSize: 12,
    flex: 8,
    padding: 10,
  },
});

export default styles;
