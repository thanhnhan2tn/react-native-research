import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

class CustomHeader extends React.Component {
  constructor() {
    super();
    const { width } = Dimensions.get('window');
    this.movingRight = new Animated.Value(-width / 4);
    this.movingLeft = new Animated.Value(width / 4);
  }

  componentDidMount() {
    this.animate(this.movingRight);
    this.animate(this.movingLeft);
  }

  animate = (originValue) => {
    Animated.timing(
      originValue,
      {
        toValue: 0,
        duration: 350,
        easing: Easing.out(Easing.poly(4)),
      },
    ).start();
  }

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
        <Animated.View
          style={{
            transform: [{ translateX: this.movingRight }],
          }}
        >
          <TouchableOpacity
            onPress={this.handlePressLeft}
            style={styles.btnLeft}
          >
            <Image style={styles.menu} source={iconLeft || assets.menu} />
            {
              titleLeft ? <Text>{titleLeft}</Text> : null
            }
          </TouchableOpacity>
        </Animated.View>
        {
          !noTitle ? <Text style={styles.title}>foodapp</Text> : null
        }
        <Animated.View
          style={{
            transform: [{ translateX: this.movingLeft }],
          }}
        >
          <TouchableOpacity
            onPress={this.handlePressRight}
          >
            <Image style={styles.cartIcon} source={iconRight || assets.shoppingCart} />
            {
              titleRight ? <Text>{titleRight}</Text> : null
            }
          </TouchableOpacity>
        </Animated.View>
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
