import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  // View,
  TextInput,
  Text,
  Picker,
  Animated,
  TouchableHighlight,
  Easing,
  Image,
} from 'react-native';
import MyBgImage from 'components/MyBgImage';
import counTry from 'data/homeCountry.js';
import bgPizza from 'assets/bg/bg_pizza.png';
import iconMaker from 'assets/icons/icon-maker-white.png';
import styles from './styles';
import {
  ORIGIN_TOP_ICON,
  ORIGIN_HEIGHT_TEXT,
  ORIGIN_HEIGHT_FORM,
  TRANSFORM_PADDING_FORM,
  DELAY_TOP_ICON,
  TIME_DEFAULT,
  WIDTH_BORDER_SELECT,
  DELAY_ANMATION_FIRST,
  HEIGHT_WINDOW,
  WIDTH_WINDOW,
} from './constants.js';

class FormSearch extends Component {
  constructor(props) {
    super(props);
    const { _value: flexProps } = props.style.flex;
    const paddingFrm = ((HEIGHT_WINDOW / 2) * flexProps) - ORIGIN_HEIGHT_FORM;
    this.state = {
      heightScreen: HEIGHT_WINDOW,
      country: '',
      paddingFrm,
      animation: {
        topIcon: new Animated.Value(ORIGIN_TOP_ICON),
        paddingForm: new Animated.Value(paddingFrm),
        left: {
          leftTextBox: new Animated.Value(WIDTH_WINDOW),
          leftListItems: new Animated.Value(WIDTH_WINDOW),
        },
        btnSearchAnim: {
          left: new Animated.Value(WIDTH_WINDOW),
          top: new Animated.Value(0),
          position: 'relative',
          height: new Animated.Value(ORIGIN_HEIGHT_TEXT),
        },
        countryAnim: {
          height: new Animated.Value(ORIGIN_HEIGHT_TEXT),
          borderWidth: new Animated.Value(WIDTH_BORDER_SELECT),
        },
      },
    };

    this.focusTextInput = this.focusTextInput.bind(this);
    this.blurTextInput = this.blurTextInput.bind(this);
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
          toValue: ORIGIN_HEIGHT_TEXT,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.countryAnim.borderWidth,
        {
          toValue: WIDTH_BORDER_SELECT,
          duration: 0,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.top,
        {
          toValue: 0,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.height,
        {
          toValue: ORIGIN_HEIGHT_TEXT,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.topIcon,
        {
          toValue: ORIGIN_TOP_ICON,
          duration: TIME_DEFAULT,
          delay: DELAY_TOP_ICON,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.paddingForm,
        {
          toValue: this.state.paddingFrm,
          duration: TIME_DEFAULT,
          delay: DELAY_TOP_ICON,
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
          duration: TIME_DEFAULT,
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
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.height,
        {
          toValue: 0,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.topIcon,
        {
          toValue: -this.state.heightScreen,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.paddingForm,
        {
          toValue: TRANSFORM_PADDING_FORM,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  animationFirst() {
    Animated.stagger(DELAY_ANMATION_FIRST, [
      Animated.timing(
        this.state.animation.left.leftTextBox,
        {
          toValue: 0,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.left,
        {
          toValue: 0,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.left.leftListItems,
        {
          toValue: 0,
          duration: TIME_DEFAULT,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }
  // ======================================== end animation =====================================

  render() {
    const { animation } = this.state;
    return (
      <Animated.View
        style={[
          styles.container,
          this.props.style,
        ]}
      >
        <MyBgImage
          source={bgPizza}
          resizeMode="cover"
        />
        {/* container text input */}
        <Animated.View style={[
            styles.containerForm,
            {
              paddingBottom: animation.paddingForm,
            },
          ]}
        >
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
                selectedValue={this.state.country ? this.state.country : counTry[0].title}
                onValueChange={(itemValue) => {
                  this.setState({
                    country: itemValue,
                  });
                }}
                style={styles.picker}
                itemStyle={styles.itemPicker} // only on on ios
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
              onFocus={this.focusTextInput}
              onBlur={this.blurTextInput}
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
        </Animated.View>
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
