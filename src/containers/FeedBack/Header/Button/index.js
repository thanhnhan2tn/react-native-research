import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { styles } from './style';

export class Button extends Component {
  getAdditionalStyle = () => {
    const { type, reverse } = this.props;
    if (type === 'success') return { backgroundColor: '#25C73A' };
    if (type === 'danger') return { backgroundColor: '#FF564E' };
    if (type === 'warning') return { backgroundColor: '#FFB827' };
    if (type === 'primary') return { backgroundColor: '#6AA3DA' };
    if (reverse === true) return { flexDirection: 'row-reverse' };
    return { backgroundColor: 'transparent' };
  }
  render() {
    const { title, type, active, color, source } = this.props;
    const additionalStyle = this.getAdditionalStyle();
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.buttonContainer, additionalStyle, active]}
      >
        <Image style={styles.image} source={source}/>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

