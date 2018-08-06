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
    handleClick: PropTypes.func,
    store: PropTypes.string,
    img: PropTypes.number,
    storeName: PropTypes.string,
  };

  static defaultProps = {
    handleClick: () => {},
    store: '',
    img: null,
    storeName: '',
  };
  handleClick = () => {
    const { handleClick, store } = this.props;
    handleClick(store);
  }
  render() {
    const { img, storeName } = this.props;
    return (
      <View style={styles.wrapperItem}>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.handleClick}
        >
          <Image
            source={img}
            style={styles.imgRecomend}
          />
        </TouchableHighlight>
        <View>
          <Text style={styles.textName}>{storeName}</Text>
        </View>
      </View>
    );
  }
}