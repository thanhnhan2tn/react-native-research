import React from 'react';
import { Animated, Easing, StyleSheet } from  'react-native';
import logo from 'assets/icons/logo.png';

class Logo extends React.Component {
  constructor() {
    super();
    this.spinValue = new Animated.Value(0);
  }
  componentDidMount () {
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return(
      <Animated.Image
        style={[{transform: [{rotate: spin}]}, styles.default, this.props.style]}
        source={logo}
      />
    );
  }
}

const styles = StyleSheet.create({
  default: {
    width: 227,
    height: 200,
  }
})

export default Logo;