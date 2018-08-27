import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import Rating from 'components/Rating';
import styles from './styles';

const Item = (props) => {
  const {
    thumb,
    name,
    ratting,
    location,
    sale,
    views,
  } = props.item;

  return (
    <View style={styles.products}>
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={styles.productImg}
          source={{ uri: thumb }}
        />
      </TouchableOpacity>

      <View style={styles.productInfo}>
        <View style={styles.wrapTitle}>
          <Text style={styles.productTitle}>{name}</Text>
          <Rating style={styles.rating} stars={Number(ratting)} />
        </View>

        <View>
          <Text>{location.city}</Text>
        </View>

        <View style={styles.productTransport}>
          <View style={styles.itemTranspot}>
            <Text>Price discount: </Text>
            <Text style={styles.textBold}>{sale} LT</Text>
          </View>

          <View style={styles.itemTranspot}>
            <Text>Views: </Text>
            <Text style={styles.textBold}>{views}</Text>
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
