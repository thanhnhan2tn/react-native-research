import { View } from 'react-native';
import React from 'react';
import styles from './style';

export const HorizontalLine = () => (
  <View style={styles.horizontalContainer}>
    <View style={styles.horizontalLine} />
  </View>
);
export const VerticalLine = () => (
  <View style={styles.verticalContainer}>
    <View style={styles.verticalLine} />
  </View>
);

