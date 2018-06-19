import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

export default class Location extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Text style={[styles.textCenter, styles.colorRed]}>Title screen</Text>
          <Text style={[styles.textCenter, styles.text_bold]}>Adress, HCM City, Vn</Text>
        </View>
        <Image
          style={styles.image}
          source={require('./images/marker.png')}
        />
      </View>
    );
  }
}
