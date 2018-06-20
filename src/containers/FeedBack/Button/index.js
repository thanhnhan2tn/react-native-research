import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({ title, active, color }) =>
  (
    <TouchableOpacity
      {...this.props}
      style={[styles.buttonContainer, active]}
    >
      <Text style={[styles.buttonText, color]}>{title}</Text>
    </TouchableOpacity>
  );

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.any,
  active: PropTypes.any,
  color: PropTypes.any,
};

Button.defaultProps = {
  title: '',
  type: '',
  active: '',
  color: '',
};

export default Button;
