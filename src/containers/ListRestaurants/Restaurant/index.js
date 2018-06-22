import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    backgroundColor: 'red',
  },
});

const Restaurant = ({ name, place }) => (
  <View style={styles.wrapper}>
    <Text>{name}</Text>
    <Text>{place}</Text>
  </View>
);

Restaurant.propTypes = {
  name: PropTypes.string,
  place: PropTypes.string,
};

Restaurant.defaultProps = {
  name: '',
  place: '',
};

export default Restaurant;

