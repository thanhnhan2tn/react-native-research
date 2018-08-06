import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    isSearch: PropTypes.bool,
    isBack: PropTypes.bool,
    onBack: PropTypes.func,
    onCancel: PropTypes.func,
    onToCart: PropTypes.func,
    onMenu: PropTypes.func,
  };

  static defaultProps = {
    isSearch: false,
    isBack: false,
    onBack: () => {},
    onCancel: () => {},
    onMenu: () => {},
    onToCart: () => {},
  };

  onPressLeft = () => {
    const { isSearch, isBack } = this.props;
    if (!isSearch && !isBack) {
      const { onMenu } = this.props;
      onMenu();
    } else if (isSearch && !isBack) {
      const { onCancel } = this.props;
      onCancel();
    } else if (!isSearch && isBack) {
      const { onBack } = this.props;
      onBack();
    }
  }
  onPressRight = () => {
    const { onToCart } = this.props;
    onToCart();
  }

  render() {
    const { isSearch, isBack } = this.props;
    return (
      <View style={styles.headerContainer}>
        {/* Home */}
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.onPressLeft}
        >
          <View>
            {/* Home */}
            <Image
              source={assets.menu}
              style={[styles.iconHeader, (!isSearch && !isBack) ? styles.blockContainer : styles.hidden]}
            />
            {/* Search */}
            <Text style={[styles.textWhite, styles.textLeft, (isSearch && !isBack) ? styles.blockContainer : styles.hidden]}>Cancel</Text>
            {/* Detail */}
            <View style={[styles.wrapBack, (!isSearch && isBack) ? styles.blockContainer : styles.hidden]}>
              <Image
                source={assets.leftIcon}
                style={styles.iconBack}
              />
              <Text style={[styles.textWhite, styles.textBack]}>Back</Text>
            </View>
          </View>
        </TouchableHighlight>
        <View style={[styles.title, (!isSearch && !isBack) || (isSearch && !isBack) ? styles.blockContainer : styles.hidden]}>
          {/* Home, Search */}
          <Image
            source={assets.logo}
            style={styles.iconLogo}
          />
          <Text style={[styles.textWhite, styles.textBig]}>foodapp</Text>
        </View>
        <TouchableHighlight
          underlayColor="transparent"
          onPress={this.onPressRight}
        >
          <View>
            {/* Home */}
            <Image
              source={assets.shoppingCart}
              style={[styles.iconHeader, (!isSearch && !isBack) ? styles.blockContainer : styles.hidden]}
            />
            {/* Search */}
            <Text style={[styles.textWhite, styles.textRight, (isSearch && !isBack) ? styles.blockContainer : styles.hidden]}>Done</Text>
            {/* Detail */}
            <Image
              source={assets.shoppingCart}
              style={[styles.iconHeader, (!isSearch && isBack) ? styles.blockContainer : styles.hidden]}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
