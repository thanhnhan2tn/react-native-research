import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';
import styles from './styles';

function ItemMenu({ item }) {
  return (
    <View style={styles.itemMenuFlatlist}>
      <Image
        source={item.image}
        style={styles.iconMenu}
      />
      <Text style={styles.titleItemMenu}>{item.title}</Text>
    </View>
  );
}

ItemMenu.propTypes = {
  item: PropTypes.object,
};

ItemMenu.defaultProps = {
  item: {},
};

export default ItemMenu;
