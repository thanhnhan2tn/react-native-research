import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import listMainScreen from 'data/listMainScreen';
import Location from './Location';
import Main from './Main';
import Footer from './Footer';
import styles from './style';

const MainScreen = () => (
  <View style={styles.container}>
    <ScrollView>
      <Location />
      <Main listMainScreen={listMainScreen} />
    </ScrollView>
    <Footer />
  </View>
);

export default MainScreen;
