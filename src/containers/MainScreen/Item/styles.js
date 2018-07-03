import { StyleSheet } from 'react-native';

import colors from 'styles/colors';

export default StyleSheet.create({
  products: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
    marginVertical: 3,
  },
  productImg: {
    width: 80,
    height: 80,
  },
  wrapTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    alignItems: 'flex-end',
  },
  productInfo: {
    flex: 1,
    paddingLeft: 15,
  },
  productTitle: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 18,
    justifyContent: 'center',
  },
  productTransport: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  itemTranspot: {
    paddingRight: 15,
    paddingLeft: 0,
    flexDirection: 'row',
  },
  textBold: {
    fontWeight: 'bold',
  },
});
