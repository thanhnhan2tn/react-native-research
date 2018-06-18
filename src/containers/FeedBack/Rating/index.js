import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
	View
} from 'react-native';

import { styles } from './style';

export class Rating extends React.Component {
  genStar = (stars) => {
    let arrStarts = [];
    for (var i = 1; i <= 5; i++) {
			let path = require('./images/star-filled.png');
			if (i > stars.ratings) {
				path = require('./images/star-unfilled.png');
			}
			arrStarts.push(<Image key={i} style={styles.image} source={path} />);
    }
    return arrStarts;
  }
	render() {
    const { stars, style } = this.props;
		return (
      <View style={[ styles.container, style ]}>
        { this.genStar(stars) }
      </View>
		);
	}
}