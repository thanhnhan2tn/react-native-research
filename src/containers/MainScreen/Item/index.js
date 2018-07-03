import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

import Rating from 'components/Rating';
import styles from './styles';

const Item = ({ item }) => {
  const {
    img,
    key,
    stars,
    providers,
    price,
    min,
  } = item;
  return (
    <View style={styles.products}>
      <Image
        style={styles.productImg}
        source={img}
      />
      <View style={styles.productInfo}>
        <View style={styles.wrapTitle}>
          <Text style={styles.productTitle}>{key}</Text>
          <Rating style={styles.rating} stars={stars} />
        </View>
        <View>
          <Text>{providers}</Text>
        </View>
        <View style={styles.productTransport}>
          <View style={styles.itemTranspot}>
            <Text>Price discount: </Text>
            <Text style={styles.textBold}>{price} LT</Text>
          </View>
          <View style={styles.itemTranspot}>
            <Text>Min: </Text>
            <Text style={styles.textBold}>{min} LT</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.object,
};

Item.defaultProps = {
  item: {},
};
