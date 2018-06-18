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
      const currentParams = getCurrentRoute(navigation.state);
      const { defaultProps } = Details;
      return (
        <Header
          onPressLeft={() => {currentParams.handleBack();}}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle
        />
      );
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ handleBack: this.handleBack });
  }

  handleBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <CustomButton
          styles={styles.btn}
          onPress={() => this.props.navigation.push('Details')}
        >
          <Text>Go to Details... again</Text>
        </CustomButton>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
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
