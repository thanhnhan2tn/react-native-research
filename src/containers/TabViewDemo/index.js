import React from 'react';
import { View } from 'react-native';

import Header from 'components/Header';
import Banner from 'components/Banner';
import RNTabView from 'components/TabView';
import styles from './styles';
import assets from 'config/assets';

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
    const { navigation } = this.props;
    const restaurant = navigation.getParam('restaurant', '');

    return (
      <View style={styles.container}>
        <Banner />
        <RNTabView restaurant={restaurant} />
      </View>
    );
  }
}

TabViewDemo.defaultProps = {
  titleLeft: 'Back',
};
