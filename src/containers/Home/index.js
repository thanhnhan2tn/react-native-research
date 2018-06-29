import React from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from 'actions';
import Header from 'components/Header';
import FormSearch from './components/FormSearch';
import ListFoods from './components/ListFoods';
import styles from './styles';
import { selectCount } from './selectors';
import {
  FLEX_ORIGIN_FORM,
  FLEX_ORIGIN_LIST,
  FLEX_TRANSFORM_FORM,
  FLEX_TRANSFORM_LIST,
  TIME_DURATION_FLEX,
} from './constants';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header onPressRight={() => navigation.navigate('Cart')} />
    ),
  };

  constructor() {
    super();
    this.animation = {
      flex: {
        flexForm: new Animated.Value(FLEX_ORIGIN_FORM),
        flexList: new Animated.Value(FLEX_ORIGIN_LIST),
      },
    };

    this.state = {
      showMenu: false,
    };
  }

  onPressCart = (navigation) => {
    navigation.navigate('Cart');
  }

  resetFlexBox = () => {
    this.setState({
      showMenu: false,
    });
    Animated.parallel([
      Animated.timing(
        this.animation.flex.flexForm,
        {
          toValue: FLEX_ORIGIN_FORM,
          duration: TIME_DURATION_FLEX,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.animation.flex.flexList,
        {
          toValue: FLEX_ORIGIN_LIST,
          duration: TIME_DURATION_FLEX,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  changeFlexBox = () => {
    this.setState({
      showMenu: true,
    });
    Animated.parallel([
      Animated.timing(
        this.animation.flex.flexForm,
        {
          toValue: FLEX_TRANSFORM_FORM,
          duration: TIME_DURATION_FLEX,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.animation.flex.flexList,
        {
          toValue: FLEX_TRANSFORM_LIST,
          duration: TIME_DURATION_FLEX,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  animateLeft = () => {
    Animated.timing(
      this.posLeft,
      {
        toValue: 0,
        duration: 1000,
        easing: Easing.linear,
      },
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <FormSearch
          style={{
            flex: this.animation.flex.flexForm,
          }}
          flex={this.animation.flex}
          changeFlexBox={this.changeFlexBox}
          resetFlexBox={this.resetFlexBox}
        />
        <ListFoods
          style={{
            flex: this.animation.flex.flexList,
          }}
          showMenu={this.state.showMenu}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  count: selectCount(state),
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
