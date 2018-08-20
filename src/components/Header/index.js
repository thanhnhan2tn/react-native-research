import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import styles from './styles';

const animTiming = {
  toValue: 1,
  duration: 500,
  esing: Easing.linear,
};
class CustomHeader extends React.Component {
  state = {
    animButtonLeft: new Animated.Value(0),
    animButtonRight: new Animated.Value(0),
  }
  componentDidMount = () => {
    Animated.parallel([
      Animated.timing(this.state.animButtonLeft, animTiming),
      Animated.timing(this.state.animButtonRight, animTiming),
    ]).start();
  };
  handlePressLeft = () => {
    const { onPressLeft } = this.props;

    if (typeof onPressLeft === 'function') {
      onPressLeft();
    }
  }
  handlePressRight = () => {
    const { onPressRight } = this.props;

    if (typeof onPressRight === 'function') {
      onPressRight();
    }
  }

  render() {
    const marginRightValue = {
      inputRange: [0, 1],
      outputRange: [-300, 0],
    };
    const marginLeftValue = {
      inputRange: [0, 1],
      outputRange: [300, 0],
    };
    const marginLeftButtonRight = this.state.animButtonRight;
    marginLeftButtonRight.interpolate(marginLeftValue);
    const marginRightButtonRight = this.state.animButtonRight.interpolate(marginRightValue);
    const marginLeftButtonLeft = this.state.animButtonLeft.interpolate(marginRightValue);
    const marginRightButtonLeft = this.state.animButtonLeft.interpolate(marginLeftValue);
    const {
      noTitle,
      iconLeft,
      iconRight,
      titleLeft,
      titleRight,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <Animated.View style={{
          marginLeft: marginLeftButtonLeft,
          marginRight: marginRightButtonLeft,
        }}
        >
          <TouchableOpacity
            onPress={this.handlePressLeft}
            style={styles.btnLeft}
          >
            <Image style={styles.menu} source={iconLeft} />
            {
              titleLeft ? <Text style={styles.titleLeftRight}>{titleLeft}</Text> : null
            }
          </TouchableOpacity>
        </Animated.View>
        {
          !noTitle ? <Text style={styles.title}>FoodApp</Text> : null
        }
        <Animated.View
          style={{
            marginLeft: marginLeftButtonRight,
            marginRight: marginRightButtonRight,
          }}
        >
          <TouchableOpacity
            onPress={this.handlePressRight}
            style={styles.btnRight}
          >
            <Image style={styles.cartIcon} source={iconRight} />
            {
              titleRight ? <Text style={styles.titleLeftRight}>{titleRight}</Text> : null
            }
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  }
}

CustomHeader.propTypes = {
  noTitle: PropTypes.bool,
  titleLeft: PropTypes.string,
  titleRight: PropTypes.string,
  onPressLeft: PropTypes.func,
  onPressRight: PropTypes.func,
  iconLeft: PropTypes.any,
  iconRight: PropTypes.any,

};

CustomHeader.defaultProps = {
  noTitle: false,
  titleLeft: '',
  titleRight: '',
  iconLeft: null,
  iconRight: null,
  onPressLeft: () => { },
  onPressRight: () => { },
};

export default CustomHeader;
