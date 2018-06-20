import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction } from 'actions';
import CustomButton from 'components/CustomButton';
import styles from './styles';
import { selectCount } from './selectors';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render() {
    const { navigation, incrementCounter, count } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <CustomButton
          onPress={() => navigation.dispatch({ type: 'detail', text: 'Hello from Home' })}
        >
          <Text>Go to Details</Text>
        </CustomButton>
        <CustomButton
          onPress={() => this.props.navigation.navigate('feedback')}
        >
          <Text>Go to Feedback</Text>
        </CustomButton>
        <CustomButton
          onPress={() => incrementCounter()}
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
