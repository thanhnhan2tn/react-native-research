import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
} from 'react-native';

import assets from 'config/assets';
import styles from './style';

const Location = ({ title, adress }) => (
  <View style={styles.container}>
    <View style={styles.wrap}>
      <Text style={[styles.textCenter, styles.colorRed]}>{title}</Text>
      <Text style={[styles.textCenter, styles.text_bold]}>{adress}</Text>
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
  adress: PropTypes.string,
};

Location.defaultProps = {
  title: 'Title screen',
  adress: 'Adress, HCM City, Vn',
};
