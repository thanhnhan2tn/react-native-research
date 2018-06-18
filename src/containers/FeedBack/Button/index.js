import React, { Component } from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { styles } from './style';

export class Button extends Component {
  getAdditionalStyle = () => {
    const { type } = this.props;
    if (type === 'success') return { backgroundColor: '#25C73A' };
    if (type === 'danger') return { backgroundColor: '#FF564E' };
    if (type === 'warning') return { backgroundColor: '#FFB827' };
    if (type === 'primary') return { backgroundColor: '#6AA3DA' };
    return { backgroundColor: 'transparent' };
  }
  render() {
    const { title, type, active, color, img } = this.props;
    const additionalStyle = this.getAdditionalStyle();
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.buttonContainer, additionalStyle, active]}
      >
        <Text style={[styles.buttonText, color]}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

