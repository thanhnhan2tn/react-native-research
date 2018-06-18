import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Rating } from '../Rating';
import { styles } from './style';

export class Banner extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./images/banner.jpg')}
        />
        <View style={styles.content}>
          <Text style={[styles.bold, styles.colorDark]}>{'Fit Food'.toUpperCase()}</Text>
          <Text style={styles.colorRed}>Adressas, Vlinlus</Text>
          <Rating stars={{ ratings: 3 }}/>
        </View>
      </View>
    );
  }
}

