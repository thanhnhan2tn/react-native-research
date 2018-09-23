import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import { View } from 'react-native-animatable';

import TouchableView from './TouchableView';

const CustomButton = ({
  onPress,
  isEnabled,
  isLoading,
  text,
  wrapperStyle,
  buttonStyle,
  textStyle,
  ...otherProps
}) => {
  const onButtonPress = isEnabled && !isLoading ? onPress : () => null;

  return (
    <View {...otherProps} style={[styles.main, wrapperStyle]}>
      <TouchableView onPress={onButtonPress} style={[styles.button, buttonStyle]}>
        {(isLoading) && <ActivityIndicator style={styles.spinner} color="grey" />}
        {(!isLoading) && <Text style={[styles.text, textStyle]}>{text}</Text>}
      </TouchableView>
    </View>
  );
};

CustomButton.propTypes = {
  onPress: PropTypes.func,
  isEnabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  text: PropTypes.string,
  buttonStyle: PropTypes.any,
  textStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
};

CustomButton.defaultProps = {
  onPress: () => null,
  isEnabled: true,
  isLoading: false,
};

const styles = StyleSheet.create({
  main: {
    margin: 5,
  },
  button: {
    height: 42,
    borderWidth: 1,
    borderRadius: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    backgroundColor: 'red',
  },
  spinner: {
    height: 26,
  },
  text: {
    textAlign: 'center',
    fontWeight: '400',
    color: 'white',
  },
});

export default CustomButton;
