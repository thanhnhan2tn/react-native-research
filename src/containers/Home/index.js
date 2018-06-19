import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomButton from 'components/CustomButton';
import FormSearch from './components/FormSearch';
import ListFoods from './components/ListFoods';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <FormSearch />
        <ListFoods />
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}
