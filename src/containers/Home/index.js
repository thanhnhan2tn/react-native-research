import React from 'react';
import {
  View,
  Animated,
  Easing,
} from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from 'actions';
import FormSearch from './components/FormSearch';
import ListFoods from './components/ListFoods';
import styles from './styles';
import { selectCount } from './selectors';

class HomeScreen extends React.Component {
  constructor() {
    super();
    this.posLeft = new Animated.Value(-300);
    this.state = {
      showMenu: false,
      animation: {
        flex: {
          flexForm: new Animated.Value(0.7),
          flexList: new Animated.Value(0.3),
        },
      },
    };
  }

  componentDidMount() {
    this.animateLeft();
  }

  changeFlexBox = () => {
    this.setState({
      showMenu: true,
    });
    Animated.parallel([
      Animated.timing(
        this.state.animation.flex.flexForm,
        {
          toValue: 0.35,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.flex.flexList,
        {
          toValue: 0.65,
          duration: 300,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  resetFlexBox = () => {
    this.setState({
      showMenu: false,
    });
    Animated.parallel([
      Animated.timing(
        this.state.animation.flex.flexForm,
        {
          toValue: 0.7,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.flex.flexList,
        {
          toValue: 0.3,
          duration: 300,
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
            flex: this.state.animation.flex.flexForm,
          }}
          flex={this.state.animation.flex}
          changeFlexBox={this.changeFlexBox}
          resetFlexBox={this.resetFlexBox}
        />
        <ListFoods
          style={{
            flex: this.state.animation.flex.flexList,
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
