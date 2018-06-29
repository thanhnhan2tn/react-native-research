import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from 'actions';
import { redirectTo } from 'actions/navigationActions';
import CustomButton from 'components/CustomButton';
import Header from 'components/Header';
import styles from './styles';
import { selectCount } from './selectors';

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header onPressRight={() => navigation.navigate('Cart')} />
    ),
  };

  constructor() {
    super();
    this.posLeft = new Animated.Value(-300);
  }

  componentDidMount() {
    this.animateLeft();
  }

  onPressCart = (navigation) => {
    navigation.navigate('Cart');
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
    const { navigation, incrementCounter, count } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            marginLeft: this.posLeft,
          }}
        >
          <Text>Home Screen</Text>
        </Animated.View>
        <CustomButton
          onPress={() => navigation.dispatch(redirectTo('details', { text: 'Hello from Home' }))}
        >
          <Text>Go to Details</Text>
        </CustomButton>
        <CustomButton
          onPress={() => this.props.navigation.navigate('feedback')}
        >
          <Text>Go to Feedback</Text>
        </CustomButton>
        <CustomButton
          onPress={incrementCounter}
        >
          <Text>Increase counter</Text>
          <Text>{count}</Text>
        </CustomButton>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  incrementCounter: PropTypes.func,
  count: PropTypes.number,
};

HomeScreen.defaultProps = {
  navigation: {},
  incrementCounter: () => {},
  count: 0,
};

const mapStateToProps = state => ({
  count: selectCount(state),
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
