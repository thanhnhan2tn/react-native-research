import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

import { Button } from './Button';
import { styles } from './style';

export class Header extends React.Component {
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.wrap}>
          <Button
            source={require('./images/arrow-left.png')}
            onPress={() => goBack()}
            title='Back'
          />
        </View>
        <View style={styles.container}>
          <Button
            source={require('./images/cart.png')}
            title='14.99 LT'
            reverse={true}
          />
        </View>
      </View>
    );
  }
}

