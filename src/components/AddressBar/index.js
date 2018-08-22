import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

const AddressBar = props => (
  <View style={[styles.container, props.style]}>
    <Icon name="map-marker-alt" size={15} style={styles.iconLeft} />
    <View style={styles.addressContainer}>
      <Text style={styles.textCity}>
        LONDON
      </Text>
      <Text style={styles.textStreet}>
        LOW GREEN STR.21-45
      </Text>
    </View>
    <Icon name="pen-alt" size={20} style={styles.iconRight} />
  </View>
);
AddressBar.propTypes = {
  style: PropTypes.number,
};

AddressBar.defaultProps = {
  style: 0,
};

export default AddressBar;
