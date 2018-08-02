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
    location: PropTypes.string,
    img: PropTypes.number,
    time: PropTypes.string,
    price: PropTypes.number,
    providers: PropTypes.string,
    transpot: PropTypes.string,
    handleClick: PropTypes.func,
    id: PropTypes.string,
    store: PropTypes.string,
  };

  static defaultProps = {
    location: '',
    img: null,
    time: '',
    price: 0,
    providers: '',
    transpot: '',
    handleClick: () => {},
    id: '',
    store: '',
  };
  handleClick = () => {
    const { handleClick, id, store } = this.props;
    handleClick(id, store);
  }
  render() {
    const {
      location,
      img,
      time,
      price,
      providers,
      transpot,
    } = this.props;
    return (
      <View style={styles.products}>
        <TouchableHighlight onPress={this.handleClick}>
          <Image
            source={img}
            style={styles.productImg}
          />
        </TouchableHighlight>
        <View style={styles.productInfor}>

          <View style={styles.wrapProductTitle}>
            <Text style={styles.productTitle}>{location}</Text>
          </View>

          <Text style={styles.provider}>{providers}</Text>

          <View style={styles.productTransport}>

            <View style={styles.wrapIcon}>
              <Image
                source={assets.delivery}
                style={styles.icon}
              />
              <Text style={styles.textItalic}>{transpot}</Text>
            </View>
            <Text style={styles.textSplit}>|</Text>
            <View style={styles.wrapIcon}>
              <Image
                source={assets.clock}
                style={styles.icon}
              />
              <Text style={styles.textItalic}> {time}</Text>
            </View>
            <Text style={styles.textSplit}>|</Text>
            <View style={styles.wrapIcon}>
              <Image
                source={assets.cartDetail}
                style={styles.icon}
              />
              <Text style={styles.textItalic}>
                <Text style={styles.textSmall}>MIN</Text>
                ${price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
