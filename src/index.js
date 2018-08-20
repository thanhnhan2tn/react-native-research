/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View, StyleSheet } from 'react-native';
import colors from './styles/colors'
import store from './store';
import AppNavigator from './config/navigations';

const App = () => (

  <Provider store={store}>
    <View style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'} />
      <AppNavigator />
    </View>
  </Provider>
);

styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App;
