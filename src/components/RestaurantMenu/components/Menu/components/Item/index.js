import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.number,
    imgCart: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.string,
    handleClick: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    img: null,
    imgCart: null,
    price: 0,
    description: '',
    handleClick: () => {},
  };

  handleClick = () => {
    const {
      handleClick, price, title, img, description, imgCart,
    } = this.props;
    handleClick(price, title, img, description, imgCart);
  };

  render() {
    const {
      title,
      img,
      imgCart,
      price,
      description,
    } = this.props;
    return (
      <View style={styles.products}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.handleClick}
        >
          <Image
            source={img}
            style={styles.productImg}
          />
        </TouchableHighlight>
        <View style={styles.productInfor}>

          <View style={styles.wrapProductTitle}>
            <Text style={styles.productIitle}>{title}</Text>
          </View>

          <Text style={styles.textSmall}>{description}</Text>
        </View>
        <View style={styles.addCart}>
          <Text style={[styles.textRed, styles.textPrice]}>{price} $</Text>
          <Image source={imgCart} style={styles.imgSmall} />
        </View>
      </View>
    );
  }
}
