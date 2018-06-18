import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import CustomButton from 'components/CustomButton';
import FormSearch from './components/FormSearch';
import styles from './styles';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View style={styles.container}>
        <FormSearch />
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

HomeScreen.propTypes = {
  navigation: PropTypes.object,
}
