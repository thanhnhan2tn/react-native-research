import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import listMainScreen from 'data/listMainScreen';
import Header from 'components/Header';
import Location from './Location';
import Main from './Main';
import Footer from './Footer';
import styles from './style';

export default class MainScreen extends React.PureComponent {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => navigation.openDrawer()}
        onPressRight={() => navigation.navigate('Cart')}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Location />
          <Main listMainScreen={listMainScreen} />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
