import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { incrementAction, decrementAction } from "actions";
import CustomButton from 'components/CustomButton';
import FormSearch from './components/FormSearch';
import ListFoods from './components/ListFoods';
import styles from './styles';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
  };

  render() {
    const { navigation, incrementCounter, count } = this.props;
    return (
      <View style={styles.container}>
        <FormSearch />
        <ListFoods />
        <Text>Home Screen</Text>
        <CustomButton
          onPress={() => navigation.dispatch({ type: 'detail', text: 'Hello from Home' })}
        >
          <Text>Go to Details</Text>
        </CustomButton>
        <CustomButton
          onPress={() => incrementCounter()}
        >
          <Text>Increase counter</Text>
        </CustomButton>
        <Text>{count}</Text>
      </View>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
};

const mapStateToProps = ({ CounterReducer }) => {
  return {
    count: CounterReducer.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementCounter: () => dispatch(incrementAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
