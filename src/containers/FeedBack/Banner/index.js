import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

import Rating from '../Rating';
import styles from './styles';

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    const {
      img, title, adress, stars,
    } = this.props.info;
    this.state = {
      img,
      title,
      adress,
      stars,
    };
  }

  render() {
    const {
      img, title, adress, stars,
    } = this.state;
    return (
      <View style={styles.container}>
        <Image
          source={img}
        />
        <View style={styles.content}>
          <Text style={[styles.bold, styles.colorDark]}>{title}</Text>
          <Text style={styles.colorRed}>{adress}</Text>
          <Rating stars={stars} />
        </View>
      </View>
    );
  }
}

Banner.propTypes = {
  info: PropTypes.object,
  img: PropTypes.string,
  title: PropTypes.string,
  adress: PropTypes.string,
  stars: PropTypes.object,
};

Banner.defaultProps = {
  info: {},
  img: '',
  title: '',
  adress: '',
  stars: {},
};
