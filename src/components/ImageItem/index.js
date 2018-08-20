import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { Rating } from 'react-native-elements'
import styles from './style'
export default class ImageItem extends Component {
    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <Image style={styles.image} source={this.props.source} />
                <Text style={styles.text}>{this.props.text}</Text>
                <Rating
                    type="star"
                    readonly
                    imageSize={20}
                    style={{ paddingVertical: 10 }} />
            </View>
        )
    };
}