import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  Text,
  Picker,
  Animated,
  TouchableHighlight,
  Dimensions,
  Easing,
  Image,
} from 'react-native';
import MyBgImage from 'components/MyBgImage';
import counTry from 'data/homeCountry.js';
import bgPizza from 'assets/bg/bg_pizza.png';
import iconMaker from 'assets/icons/icon-maker-white.png';
import styles from './styles';

class FormSearch extends Component {
  constructor(props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.state = {
      heightScreen: height,
      country: '',
      animation: {
        topIcon: new Animated.Value(15),
        left: {
          leftTextBox: new Animated.Value(width),
          leftListItems: new Animated.Value(width),
        },
        btnSearchAnim: {
          left: new Animated.Value(width),
          top: new Animated.Value(0),
          position: 'relative',
          height: new Animated.Value(40),
        },
        countryAnim: {
          height: new Animated.Value(40),
          borderWidth: new Animated.Value(1),
        },
      },
    };
  }

  componentDidMount() {
    this.animationFirst();
  }

  focusTextInput() {
    this.minifyPadding();
    this.props.changeFlexBox();
  }

  blurTextInput() {
    this.resetAnimation();
    this.props.resetFlexBox();
  }

  // ======================================== animation =====================================

  resetAnimation() {
    // show select country
    Animated.parallel([
      Animated.timing(
        this.state.animation.countryAnim.height,
        {
          toValue: 40,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.countryAnim.borderWidth,
        {
          toValue: 1,
          duration: 0,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.top,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.height,
        {
          toValue: 40,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.topIcon,
        {
          toValue: 15,
          duration: 300,
          delay: 80,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  minifyPadding() {
    Animated.parallel([
      Animated.timing(
        this.state.animation.countryAnim.height,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.countryAnim.borderWidth,
        {
          toValue: 0,
          duration: 0,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.top,
        {
          toValue: this.state.heightScreen,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.height,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.topIcon,
        {
          toValue: -this.state.heightScreen,
          duration: 300,
          delay: 80,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  animationFirst() {
    Animated.parallel([
      Animated.timing(
        this.state.animation.left.leftTextBox,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.left,
        {
          toValue: 0,
          duration: 300,
          delay: 30,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.left.leftListItems,
        {
          toValue: 0,
          duration: 300,
          delay: 80,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }
  // ======================================== end animation =====================================

  render() {
    const {
      animation,
      country,
    } = this.state;
    return (
      <Animated.View
        style={[
          styles.container,
          this.props.style,
          {
            justifyContent: this.state.showMenu ? 'flex-end' : 'center',
            alignItems: this.state.showMenu ? 'flex-end' : 'center',
          },
        ]}
        onLayout={this.onLayout}
      >
        <MyBgImage
          source={bgPizza}
          resizeMode="cover"
        />
        {/* container text input */}
        <View style={styles.containerForm}>
          <Animated.View
            style={[
              ...styles.containerTextInput,
              {
                left: animation.left.leftTextBox,
              },
            ]}
          >
            <Animated.View
              style={[
                styles.containerIconMap,
                {
                  top: animation.topIcon,
                },
              ]}
            >
              <Image
                source={iconMaker}
                style={styles.iconMap}
              />
            </Animated.View>
            <Animated.View
              style={[
                styles.textInput,
                styles.textInputBorder,
                {
                  height: animation.countryAnim.height,
                  borderBottomWidth: animation.countryAnim.borderWidth,
                },
              ]}
            >
              <Picker
                selectedValue={country && counTry[0].title}
                onValueChange={(itemValue) => {
                  this.setState({
                    country: itemValue,
                  });
                }}
                style={{ height: 40 }}
                itemStyle={{
                  height: 40,
                  lineHeight: 40,
                }}
              >
                {counTry.map(item => (
                  <Picker.Item
                    key={item.title}
                    label={item.title}
                    value={item.title}
                  />
                ))}
              </Picker>
            </Animated.View>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="transparent"
              onFocus={() => this.focusTextInput()}
              onBlur={() => this.blurTextInput()}
              placeholder="Your address"
            />
          </Animated.View>
          <Animated.View
            style={{
              left: animation.btnSearchAnim.left,
              top: animation.btnSearchAnim.top,
              height: animation.btnSearchAnim.height,
            }}
          >
            <TouchableHighlight>
              <Text style={styles.btnSearch}>Search Food</Text>
            </TouchableHighlight>
          </Animated.View>
        </View>
      </Animated.View>
    );
  }
}

FormSearch.propTypes = {
  changeFlexBox: PropTypes.func,
  resetFlexBox: PropTypes.func,
  style: PropTypes.object,
};


FormSearch.defaultProps = {
  changeFlexBox: () => {},
  resetFlexBox: () => {},
  style: {},
};

export default FormSearch;
