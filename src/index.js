/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet, StatusBar } from 'react-native';
import store from './store';
import AppNavigator from './config/navigations';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
const App = () => (
  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <AppNavigator />
    </View>
  </Provider>
);

export default App;
