import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

export default class Rating extends React.Component {
  genStar = (stars) => {
    const arrStars = [1, 2, 3, 4, 5];
    return arrStars.map((ele) => {
      const url = (ele > stars.ratings) ? assets.starUnfilled : assets.starFilled;
      return <Image key={ele} style={styles.image} source={url} />;
    });
  }
  render() {
    const { stars, style } = this.props;
    return (
      <View style={[styles.container, style]}>
        { this.genStar(stars) }
      </View>
    );
  }
}

Rating.propTypes = {
  stars: PropTypes.object,
  style: PropTypes.any,
};

Rating.defaultProps = {
  stars: {},
  style: '',
};
