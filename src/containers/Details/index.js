import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import Header from 'components/Header';
import assets from 'config/assets';

export default class Details extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => {
          navigation.goBack();
        }}
        iconLeft={assets.backIcon}
        titleLeft="Back"
        noTitle={true}
      />
    ),
  }

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    const { navigation: { state } } = this.props;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{state.params.text}</Text>
        <Button
          title="Go back"
          onPress={this.handleBack}
        />
      </View>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

Details.defaultProps = {
  navigation: {},
};
