import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from 'actions';
import CustomButton from 'components/CustomButton';
import StyledButton from 'components/StyledButton';
import Header from 'components/Header';
import NumberIncrement from './NumberIncrement';

import { goingTo } from 'utils/navigations';
import styles from './styles';
import { selectCount } from './selectors';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => navigation.openDrawer()}
        onPressRight={() => navigation.navigate('Cart')}
      />
    ),
  };

  render() {
    const { navigation, incrementCounter, count } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <StyledButton
          onPress={() => goingTo({ navigation, routeName: 'auth'})}
          text='Auth Screen'
        />
        <StyledButton
          onPress={() => goingTo({ navigation, routeName: 'detail', text: 'Hello from Home' })}
          text='Detail page'
        />
        <NumberIncrement incrementCounter={incrementCounter} number={count} />
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
