import React from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';

import Restaurant from './Restaurant';

const lists = [
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
  {
    name: 'Pitstop pizza',
    place: 'Italian',
  },
];

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 70,
  },
});

export default class ListRestaurants extends React.Component {
  constructor() {
    super();
    const { length } = lists;
    this.rotateValue = [];
    this.opacityValue = [];
    for (let i = 0; i < length; i++) {
      this.rotateValue[i] = new Animated.Value(0);
      this.opacityValue[i] = new Animated.Value(0);
    }
  }

  componentDidMount() {
    this.animate();
  }

  createAnimation = (value, duration = 200, easing, delay = 0) => (
    Animated.timing(
      value,
      {
        toValue: 1,
        duration,
        easing,
        delay,
      },
    )
  )

  animate = () => {
    const animations = lists.map((item, i) => (
      Animated.parallel([
        this.createAnimation(this.rotateValue[i], 250 - (i * 10), Easing.cubic),
        this.createAnimation(this.opacityValue[i], 200 - (i * 10), Easing.cubic),
      ])
    ));
    Animated.stagger(100, animations).start();
  }

  renderRow = () => (
    lists.map((item, i) => {
      const rotate = this.rotateValue[i].interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '0deg'],
      });
      const opacity = this.opacityValue[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
      });
      return (
        <Animated.View
          key={item.name}
          style={{
            opacity,
            transform: [{ rotateX: rotate }],
          }}
        >
          <Restaurant {...item} />
        </Animated.View>
      );
    })
  )

  render() {
    return (
      <View style={styles.wrapper}>
        {this.renderRow()}
      </View>
    );
  }
}
