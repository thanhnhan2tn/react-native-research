import React from 'react';
import { View } from 'react-native';

import Banner from 'components/Banner';
import RNTabView from 'components/TabView';

export default () => (
  <View style={{ flex: 1, paddingTop: 60 }}>
    <Banner />
    <RNTabView />
  </View>
);