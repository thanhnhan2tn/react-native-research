import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    isSearch: PropTypes.bool,
    onBack: PropTypes.func,
    navigation: PropTypes.any,
  };

  static defaultProps = {
    isSearch: false,
    onBack: () => {},
    navigation: {},
  };

  onPress = () => {
    const { onBack } = this.props;
    onBack();
  }
  render() {
    const { navigation, isSearch } = this.props;
    return (
      <View style={styles.headerContainer}>
        <TouchableHighlight
          underlayColor="transparent"
          style={isSearch ? styles.hidden : styles.blockContainer}
          onPress={() => navigation.navigate('modal')}
        >
          <Image
            source={assets.menu}
            style={styles.iconHeader}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={this.onPress}
          underlayColor="transparent"
          style={!isSearch ? styles.hidden : styles.blockContainer}
        >
          <Text style={[styles.textWhite, styles.textLeft]}>Cancel</Text>
        </TouchableHighlight>
        <View style={styles.title}>
          <Image
            source={assets.logo}
            style={styles.iconLogo}
          />
          <Text style={[styles.textWhite, styles.textBig]}>foodapp</Text>
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          style={isSearch ? styles.hidden : styles.blockContainer}
          onPress={() => navigation.navigate('modal')}
        >
          <Image
            source={assets.shoppingCart}
            style={styles.iconHeader}
          />
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="transparent"
          style={!isSearch ? styles.hidden : styles.blockContainer}
        >
          <Text style={[styles.textWhite, styles.textRight]}>Done</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
