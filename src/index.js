/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { View, StyleSheet } from 'react-native';
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
      <AppNavigator />
    </View>
  </Provider>
);

export default App;
