import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './style';
import Header from '../../components/Header';
import assets from '../../config/assets';
import CustomSlider from '../../components/CustomSlider';

export default class TestComponent extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => {
          navigation.dispatch({ type: 'back' });
        }}
        titleLeft="Cancel"
        iconRight={assets.shoppingCart}
        noTitle={false}
      />
    ),
  }
  render() {
    return (
      <View style={styles.containers}>
        <View style={{ marginTop: 80 }}>
          <CustomSlider
            itemPerPage={4}
            data={[
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
              { source: assets.foodImage },
            ]} />
        </View>

      </View>
    )
  };
}