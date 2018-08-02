import React, { PureComponent } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import RestaurantMenu from 'components/RestaurantMenu';

export default class DetailsScreen extends PureComponent {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  };

  render() {
    const { navigation } = this.props;
    const store = navigation.getParam('store', '');
    return (
      <View style={{ flex: 1 }}>
        <RestaurantMenu
          store={store}
          description="Healthy food"
        />
      </View>
    );
  }
}
