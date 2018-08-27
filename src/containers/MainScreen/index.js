import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import listMainScreen from 'data/listMainScreen';
import Header from 'components/Header';
import Location from './Location';
import Main from './Main';
import Footer from './Footer';
import styles from './style';
import getMain, { selectRestaurant } from './selectors';

class MainScreen extends React.PureComponent {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => navigation.openDrawer()}
        onPressRight={() => navigation.navigate('Cart')}
      />
    ),
  };

  goToDetailScreen = (res) => {
    const { navigation } = this.props;

    navigation.navigate('tabview', {
      restaurant: res
    })
  }

  render() {
    const { restaurants } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Location />
          <Main
            restaurants={restaurants}
            onPress={this.goToDetailScreen}
          />
        </ScrollView>
        <Footer />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  mainScreenState: getMain(state),
  restaurants: selectRestaurant(state)
})

const mapDispatchToProps = dispatch => ({
  fetchRestaurants: () => dispatch({ type: 'FETCH_RESTAURANTS' })
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
