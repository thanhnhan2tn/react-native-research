import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, StyleSheet } from 'react-native';

import Header from 'components/Header';
import CustomButton from 'components/CustomButton';
import assets from 'config/assets';
import { getCurrentRoute } from 'utils/navigations';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#f44242',
  },
});

export default class Details extends React.Component {

  static navigationOptions = {
    header: ({ navigation }) => {
      const { defaultProps } = Details;
      return (
        <Header
          onPressLeft={() => {
            navigation.dispatch({ type: 'home' })
          }}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle
        />
      );
    }
  }

  handleBack = () => {
    const { navigation } = this.props;
    navigation.dispatch({ type: 'home' });
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
  titleLeft: PropTypes.string,
};

Details.defaultProps = {
  titleLeft: 'Back',
};
