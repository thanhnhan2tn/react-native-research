import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

const Location = ({ title, address }) => (
  <View style={styles.container}>
    <View style={styles.wrap}>
      <Text style={[styles.textCenter, styles.colorRed]}>{title}</Text>
      <Text style={[styles.textCenter, styles.textBold]}>{address}</Text>
    </View>
    <Image
      style={styles.image}
      source={assets.marker}
    />
  </View>
);

export default Location;

Location.propTypes = {
  title: PropTypes.string,
  address: PropTypes.string,
};

Location.defaultProps = {
  title: 'Title screen',
  address: 'Address, HCM City, Vn',
};
