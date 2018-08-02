import React, { PureComponent } from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

export default class ModalScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    );
  }
}

