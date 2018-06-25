import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

import Rating from 'components/Rating';
import styles from './style';

const Item = ({ item }) => {
  const {
    img, key, stars, providers, price, min,
  } = item;
  return (
    <View style={styles.products}>
      <Image
        style={styles.product_img}
        source={img}
      />
      <View style={styles.product_infor}>
        <View style={styles.wrap_title}>
          <Text style={styles.product_title}>{key}</Text>
          <Rating style={styles.rating} stars={stars} />
        </View>
        <View>
          <Text>{providers}</Text>
        </View>
        <View style={styles.product_transport}>
          <View style={styles.item_transpot}>
            <Text>Price discount: </Text>
            <Text style={styles.text_bold}>{price} LT</Text>
          </View>
          <View style={styles.item_transpot}>
            <Text>Min: </Text>
            <Text style={styles.text_bold}>{min} LT</Text>
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
