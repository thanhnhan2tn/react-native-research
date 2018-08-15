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
    img: PropTypes.number,
    name: PropTypes.string,
  };

  static defaultProps = {
    handleClick: () => {},
    img: null,
    name: '',
  };
  handleClick = () => {
    const { handleClick, name } = this.props;
    handleClick(name);
  }
  render() {
    const { img, name } = this.props;
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
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.handleClick}
        >
          <Text style={styles.textName}>{name}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
