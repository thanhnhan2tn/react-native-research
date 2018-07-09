import React from 'react';
import { View } from 'react-native';

import assets from 'config/assets';
import Header from 'components/Header';
import Banner from 'components/Banner';
import RNTabView from 'components/TabView';

// const TabViewDemo = () => (
export default class TabViewDemo extends React.PureComponent {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { defaultProps } = TabViewDemo;
      return (
        <Header
          onPressLeft={() => {
            navigation.goBack();
          }}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle={true}
          onPressRight={() => navigation.navigate('Cart')}
        />
      );
    },
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 60 }}>
        <Banner />
        <RNTabView />
      </View>
    );
  }
}

TabViewDemo.defaultProps = {
  titleLeft: 'Back',
};
