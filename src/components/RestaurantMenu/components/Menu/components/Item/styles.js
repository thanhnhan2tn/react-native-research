import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  products: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eeeeee',
  },

  productImg: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'grey',
  },

  productInfor: {
    paddingLeft: 15,
    width: '70%',
  },

  wrapProductTitle: {
    flexDirection: 'row',
  },

  productIitle: {
    fontSize: 13,
    fontWeight: '500',
  },

  textSmall: {
    fontSize: 10,
    color: 'grey',
  },

  addCart: {
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  textRed: {
    color: 'red',
  },

  textPrice: {
    fontSize: 12,
    width: 50,
    textAlign: 'center',
  },

  imgSmall: {
    width: 20,
    height: 20,
  },
});
export default styles;
