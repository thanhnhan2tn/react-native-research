import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from '../Button';
import { styles } from './style';

export class Tabs extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button title='Menu'/>
        <Button active={styles.active}
          color={styles.color}
          title='Feedback'
        />
        <Button title='Infomation'/>
      </View>
    );
  }
}
