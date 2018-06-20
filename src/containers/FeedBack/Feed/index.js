import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  Text,
} from 'react-native';

import assets from 'config/assets';
import Rating from '../Rating';
import styles from './styles';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    const { name, body, stars } = this.props;
    this.state = {
      name,
      body,
      stars,
    };
  }

  render() {
    const { name, body, stars } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.feed}>
          <Text style={styles.bold}>{name}</Text>
          <Text style={styles.body}>{body}</Text>
          <Rating style={styles.marginTop} stars={stars} />
        </View>
        <Image
          style={styles.sizeImg}
          source={assets.userIcon}
        />
      </View>
    );
  }
}

Feed.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  stars: PropTypes.object,
};

Feed.defaultProps = {
  name: '',
  body: '',
  stars: {},
};
