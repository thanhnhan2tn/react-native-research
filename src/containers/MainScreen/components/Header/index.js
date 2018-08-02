import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';
import assets from 'config/assets';
import styles from './styles';

const Header = () => (
  <View style={styles.header_location}>
    <Image
      source={assets.location}
      style={styles.icon}
      resizeMode="cover"
    />
    <View style={styles.textCenter}>
      <Text>Location</Text>
      <Text>This is Store name</Text>
    </View>
    <Image
      source={assets.pen}
      style={styles.icon}
      resizeMode="cover"
    />
  </View>
);

export default Header;
