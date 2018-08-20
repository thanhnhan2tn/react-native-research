import React, { PureComponent } from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Rating } from 'react-native-elements';
import styles from './style';

class ImageItem extends PureComponent {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image style={styles.image} source={this.props.source} />
        <Text style={styles.text}>{this.props.text}</Text>
        <Rating
          type="star"
          readonly={true}
          imageSize={20}
          style={{ paddingVertical: 10 }}
        />
      </View>
    );
  }
}

ImageItem.propTypes = {
  style: PropTypes.object,
  source: PropTypes.number,
  text: PropTypes.string,
};
ImageItem.defaultProps = {
  style: {},
  source: 0,
  text: '',
};
export default ImageItem;
