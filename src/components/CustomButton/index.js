import React, { PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

const CustomButton = (props) => {
  // let stylesCustom = styles;
  // if (props.styles) {
  //   stylesCustom = Object.assign({}, styles, props.styles);
  // }
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
