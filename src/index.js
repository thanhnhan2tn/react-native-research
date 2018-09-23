/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import store from './store';
import AppNavigator from './navigations';

const App = () => (
  <Provider store={store}>
    {/* Enable support iPhone X */}
    <SafeAreaView style={styles.safeArea}>
      <AppNavigator />
    </SafeAreaView>
  </Provider>
);

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default App;
