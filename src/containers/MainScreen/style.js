import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    paddingTop: 70,
  },
  header_location: {
    justifyContent: 'space-between',
    padding: 20,
    flexDirection: 'row',
    backgroundColor: 'yellow',
  },
  products: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  product_img: {
    width: 80,
    height: 80,
  },
  product_infor: {
    paddingLeft: 15,
  },
  product_title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  product_transport: {
    paddingTop: 8,
    paddingLeft: 0,
    flex: 1,
    flexDirection: 'row',
  },
  item_transpot: {
    borderRightWidth: 1,
    paddingRight: 15,
    paddingLeft: 0,
    flexDirection: 'row',
  },
  item_transpot_1: {
    borderRightWidth: 1,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: 'row',
  },
  icon_small: {
    width: 20,
    height: 20,
  },
  text_italic: {
    fontStyle: 'italic',
    paddingLeft: 5,
  },
});
