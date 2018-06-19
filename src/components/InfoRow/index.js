import React, { Component } from 'react';
import { Image, View, Text } from 'react-native';
import styles from './styles';

const InfoRow = (props) => (
  <View style={styles.row}>
    <View style={styles.inforDetail}>
      <Image style={styles.inforIcon} source={{ uri: props.uri }}/>
      <Text style={styles.inforAttr}>{props.infoAttr}</Text>
    </View>
    <Text style={styles.inforValue}>{props.infoVal}</Text>
  </View>
);

export default InfoRow;
