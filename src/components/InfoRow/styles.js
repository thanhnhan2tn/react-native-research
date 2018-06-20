import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
  },
  inforIcon: {
    width: 20,
    height: 20,
    backgroundColor: 'transparent',
  },
  inforDetail: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
  },
  inforAttr: {
    flex: 1,
    color: '#C72F45',
    marginLeft: 5,
  },
  inforValue: {
    flex: 1,
    textAlign: 'right',
    color: '#000000',
    paddingRight: 10,
  },
});
