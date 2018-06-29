import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import assets from 'config/assets';
import styles from './styles';

const ListItem = (props) => {
  const {
    name,
    price,
    quantity,
    onPressDecrease,
    onPressIncrease,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textPrice}>{price}</Text>
      </View>

      <View style={styles.counterContainer}>
        <View style={styles.counterWrap}>
          <Icon source={assets.minus} onPress={onPressDecrease} />
          <Text style={styles.textQuantity}>{quantity}</Text>
          <Icon source={assets.plus} onPress={onPressIncrease} />
        </View>
      </View>
    </View>
  );
};

ListItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
  onPressDecrease: PropTypes.func,
  onPressIncrease: PropTypes.func,
};

ListItem.defaultProps = {
  name: '',
  price: 0,
  quantity: 0,
  onPressDecrease: () => {},
  onPressIncrease: () => {},
};

export default ListItem;
