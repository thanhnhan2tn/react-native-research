import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import styles from './styles';

function ItemFood({ item }) {
  const { width } = Dimensions.get('window');
  return (
    <View style={styles.itemFlatlist}>
      <Image
        source={{ uri: item.image }}
        style={{
          flex: 1,
          width: width / 3.5,
        }}
      />
      <Text style={styles.titleItem}>{item.title}</Text>
    </View>
  );
}

ItemFood.propTypes = {
  item: PropTypes.object,
};

ItemFood.defaultProps = {
  item: {},
};

export default ItemFood;
