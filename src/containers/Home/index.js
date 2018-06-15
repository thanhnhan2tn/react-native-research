import React from 'react';
import { View, Text, Button } from 'react-native';

import CustomButton from 'components/CustomButton';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <CustomButton
          onPress={() => this.props.navigation.navigate('details')}
        >
         <Text>Go to Details</Text>
        </CustomButton>
      </View>
    );
  }
}