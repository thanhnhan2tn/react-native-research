import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

class CustomHeader extends React.Component {
  handlePressLeft = () => {
    const { onPressLeft } = this.props;

    if (typeof onPressLeft === 'function') {
      onPressLeft();
    } else {
      console.log("open");
      this.props.navigation.navigate("DrawerOpen");
    }
  }

  handlePressRight = () => {
    const { onPressRight } = this.props;

    if (typeof onPressRight === 'function') {
      onPressRight();
    }
  }

  render() {
    const {
      title,
      iconLeft,
      iconRight,
      titleLeft,
      titleRight,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={this.handlePressLeft}
          style={styles.btnLeft}
        >
          <Image style={styles.menu} source={iconLeft || assets.menu} />
          {
            titleLeft ? <Text style={styles.textLeft}>{titleLeft}</Text> : null
          }
        </TouchableOpacity>
        {
          title ? <Text style={styles.title}>{title}</Text> : null
        }
        <TouchableOpacity
          onPress={this.handlePressRight}
        >
          <Image style={styles.cartIcon} source={iconRight || assets.shoppingCart} />
          {
            titleRight ? <Text>{titleRight}</Text> : null
          }
        </TouchableOpacity>
      </View>
    );
  }
}

CustomHeader.propTypes = {
  noTitle: PropTypes.bool,
  iconRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  iconLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
};

CustomHeader.defaultProps = {
  title: undefined,
  iconRight: false,
  iconLeft: false,
  titleLeft: '',
  titleRight: '',
  onPressLeft: undefined,
  onPressRight: () => {},
};

export default CustomHeader;
