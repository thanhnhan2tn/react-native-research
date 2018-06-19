import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  products: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    marginVertical: 3
  },
  product_img: {
    width: 80,
    height: 80
  },
  wrap_title: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    alignItems: 'flex-end'
  },
  product_infor: {
    flex: 1,
    paddingLeft: 15,
  },
  product_title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  product_transport: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10
  },
  item_transpot: {
    paddingRight: 15,
    paddingLeft: 0,
    flexDirection: 'row',
  },
  text_italic: {
    fontStyle: 'italic',
  },
  text_bold: {
    fontWeight: 'bold',
  }
  })

export default styles;
