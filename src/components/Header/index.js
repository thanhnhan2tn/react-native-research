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
      console.log('open drawer');
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
      noTitle,
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
            titleLeft ? <Text>{titleLeft}</Text> : null
          }
        </TouchableOpacity>
        {
          !noTitle ? <Text style={styles.title}>FoodApp</Text> : null
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
  iconRight: PropTypes.string,
  iconLeft: PropTypes.string,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
};

CustomHeader.defaultProps = {
  noTitle: false,
  iconRight: '',
  iconLeft: '',
  titleLeft: '',
  titleRight: '',
  onPressLeft: () => {},
  onPressRight: () => {},
};

export default CustomHeader;
