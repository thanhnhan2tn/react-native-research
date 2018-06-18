import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Button } from './Button';
import { styles } from './style';

export class Header extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    console.log('props', goBack);
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Button
            source={require('./images/arrow-left.png')}
            onPress={() => goBack()}
          />
          <Text style={styles.text}>Back</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.text}>14.99 LT</Text>
          <Button
            source={require('./images/cart.png')}
            onPress={() => console.log('go to cart')}
          />
        </View>
      </View>
    );
  }
}

