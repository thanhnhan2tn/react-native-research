import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import { Rating } from '../Rating';
import { styles } from './style';

export class Feed extends React.Component {
  render() {
    const { name, body, stars } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.feed}>
          <Text style={styles.bold}>{name}</Text>
          <Text style={styles.body}>{body}</Text>
          <Rating style={{marginTop: 5}} stars={{ ratings: stars }}/>
        </View>
        <Image
          style={styles.sizeImg}
          source={{uri: 'http://www.kkmm.gov.my/images/icon_copy_copy.png'}}
        />
      </View>
    );
  }
}
