import { View } from 'react-native';
import React, { Component } from 'react';
import styles from './style'
export default class Line extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.line} />
            </View>
        )
    };
}