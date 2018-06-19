import React from 'react';
import {
  Text,
  View
} from 'react-native';

import { Button } from './Button';
import styles from './style';

export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button source={require('./images/bars.png')}/>
        <Text style={styles.text}>FoodApp</Text>
        <Button source={require('./images/cart.png')}/>
      </View>
    );
  }
}
