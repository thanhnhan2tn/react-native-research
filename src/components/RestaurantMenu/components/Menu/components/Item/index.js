import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Item extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.number,
    price: PropTypes.any,
    description: PropTypes.string,
    handleClick: PropTypes.func,
    id: PropTypes.any,
  };

  static defaultProps = {
    title: '',
    img: null,
    price: null,
    description: '',
    handleClick: () => {},
    id: null,
  };

  handleClick = () => {
    const {
      handleClick, id,
    } = this.props;
    handleClick(id);
  };

  render() {
    const {
      title,
      img,
      price,
      description,
      id,
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
            <Text style={styles.productIitle}>{title} - {id}</Text>
          </View>

          <Text style={styles.textSmall}>{description}</Text>
        </View>
        <View style={styles.addCart}>
          <Text style={[styles.textRed, styles.textPrice]}>{price} $</Text>
          <Image source={assets.cart} style={styles.imgSmall} />
        </View>
      </View>
    );
  }
}
