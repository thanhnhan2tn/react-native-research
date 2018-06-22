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
    const arrStarts = [1, 2, 3, 4, 5];
    return arrStarts.map((ele) => {
      if (ele > stars.ratings) {
        return <Image key={ele} style={styles.image} source={assets.starUnfilled} />;
      }
      return <Image key={ele} style={styles.image} source={assets.starFilled} />;
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
