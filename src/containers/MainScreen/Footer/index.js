import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

export default class Footer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/align-left.png')}
          style={styles.image}
        />
        <Text style={styles.text} numberOfLines={1}>Virial extends, King, Maccaron extends extends extends</Text>
      </View>
    );
  }
}
