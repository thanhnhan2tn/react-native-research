import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

const Footer = () => (
  <View style={styles.container}>
    <Image
      source={assets.alignLeft}
      style={styles.image}
    />
    <Text style={styles.text} numberOfLines={1}>Virial extends, King, Maccaron extends extends extends</Text>
  </View>
);

export default Footer;
