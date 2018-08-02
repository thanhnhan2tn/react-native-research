import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapInfor: {
    marginTop: 10,
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
  },

  wrapList: {
    backgroundColor: '#d7ccc8',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 7,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
    paddingHorizontal: 10,
  },

  textLeft: {
    color: 'black',
    fontSize: 12,
  },

  textRight: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 12,
  },

  wrapDescription: {
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'flex-start',
  },

  inforMore: {
    padding: 10,
    fontSize: 13,
    lineHeight: 20,
  },

  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },

  infoLeft: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default styles;
