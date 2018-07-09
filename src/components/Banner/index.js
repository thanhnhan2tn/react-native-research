import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import assets from 'config/assets';
import Rating from '../Rating';
import styles from './styles';

export default class Banner extends React.PureComponent {
  render() {
    const {
      img, title, address, stars,
    } = this.props.bannerInfo;
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={img}
        />
        <View style={styles.content}>
          <Text style={[styles.bold, styles.colorDark]}>{title}</Text>
          <Text style={styles.colorRed}>{address}</Text>
          <Rating stars={stars} />
        </View>
      </View>
    );
  }
}

Banner.propTypes = {
  bannerInfo: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
  address: PropTypes.string,
  stars: PropTypes.object,
};

Banner.defaultProps = {
  bannerInfo: {
    id: 1, img: assets.banner, title: 'FIT FOOD', address: 'Addressas, Vlinlus', stars: { ratings: 3 },
  },
  img: '',
  title: '',
  address: '',
  stars: {},
};
