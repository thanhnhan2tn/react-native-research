import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomButton from 'components/CustomButton';
import MainScreen from 'components/MainScreen';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <MainScreen/>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}
