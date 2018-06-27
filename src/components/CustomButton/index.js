import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const CustomButton = props => (
  <View style={styles.wrapper}>
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.btn, props.styles]}
    >
      {props.children}
    </TouchableOpacity>
  </View>
);

CustomButton.propTypes = {
  onPress: PropTypes.func,
  styles: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

CustomButton.defaultProps = {
  onPress: () => {},
  styles: {},
};

export default CustomButton;
