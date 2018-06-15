import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const CustomButton = (props) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.btn, props.styles]}
      >
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
