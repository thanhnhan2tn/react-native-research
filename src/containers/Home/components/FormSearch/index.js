import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  Picker,
  StyleSheet,
  Animated,
  TouchableHighlight,
  Dimensions,
  Easing
} from 'react-native';
import counTry from 'data/homeCountry.js';

class FormSearch extends Component {
  constructor (props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.state = {
      widthScreen: width,
      heightScreen: height,
      country: '',
      animation: {
        fadeAnim: new Animated.Value(0),
        moveLeft: new Animated.Value(width),
        paddingBox: new Animated.Value(100),
        btnSearchAnim: {
          left: new Animated.Value(width),
          top: new Animated.Value(0),
        },
        countryAnim: {
          height: new Animated.Value(50),
          borderWidth: new Animated.Value(1),
        }
      }
    }
  }

  focusTextInput() {
    this.minifyPadding();
  }

  blurTextInput() {
    this.resetAnimation();
  }

  componentDidMount() {
    this.moveButtonSearch();
    this.moveBoxText();
  }

  // ======================================== animation =====================================

  resetAnimation() {

    // show select country
    Animated.parallel([
      Animated.timing(
        this.state.animation.paddingBox,
        {
          toValue: 100,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.countryAnim.height,
        {
          toValue: 50,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.countryAnim.borderWidth,
        {
          toValue: 1,
          duration: 0,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.top,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear
        }
      ),
    ]).start();
  }

  minifyPadding() {
    // hidden select country
    Animated.parallel([
      Animated.timing(
        this.state.animation.paddingBox,
        {
          toValue: 30,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.countryAnim.height,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.countryAnim.borderWidth,
        {
          toValue: 0,
          duration: 0,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.top,
        {
          toValue: this.state.heightScreen,
          duration: 1000,
          easing: Easing.linear
        }
      )
    ]).start();
  }

  moveButtonSearch() {
    Animated.timing(
      this.state.animation.btnSearchAnim.left,
      {
        toValue: 0,
        duration: 300,
        delay: 30,
      }
    ).start();
  }

  moveBoxText() {
    // this.state.animation.moveContainText.setValue(this.state.width);
    Animated.timing(
      this.state.animation.moveLeft,
      {
        toValue: 0,
        duration: 300,
        easing: Easing.linear
      }
    ).start(
      // () => this.moveBoxText()
    )
  }

  // ======================================== end animation =====================================

  render() {
    const {
      animation,
      country,
    } = this.state;

    return (
      <Animated.View style={[
          styles.container,
          {
            paddingTop: animation.paddingBox,
            paddingBottom: animation.paddingBox,
          }
        ]}
        onLayout={this.onLayout}
      >
        <Animated.View
          style={{
            left: animation.moveLeft
          }}
        >
          <View style={styles.containerTextInput}>
            <Animated.View style={
              [
                styles.textInput, styles.textInputBorder,
                {
                  height: animation.countryAnim.height,
                  borderBottomWidth: animation.countryAnim.borderWidth
                }
              ]
            }>
              <Picker
                selectedValue={country ? country : counTry[0].title}
                onValueChange={(itemValue, itemIndex) => {
                  this.setState({
                    country: itemValue
                  }
                )}}>
                {
                  counTry.map((item) =>
                    <Picker.Item key={item.title} label={item.title} value={item.title} />
                  )
                }
              </Picker>
            </Animated.View>
            
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              onFocus={() => { this.focusTextInput() }}
              onBlur={() => { this.blurTextInput() }}
              placeholder="Your address"
            />
          </View>
        </Animated.View>

        <Animated.View
          style={{
            left: animation.btnSearchAnim.left,
            top: animation.btnSearchAnim.top,
          }}
        >
          <TouchableHighlight>
            <Text style={styles.btnSearch}>Search Food2</Text>
          </TouchableHighlight>
        </Animated.View>

        {/* <Animated.View style={{
          // position: 'absolute',
          // top: '100%',
          // left: 0,
          // display: 'none',
          top: 0,
          backgroundColor: 'red',
        }}>
          <Text>+++</Text>
        </Animated.View> */}
      </Animated.View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    width: '100%',
    backgroundColor: 'transparent',
  },
  containerTextInput: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#ffffff',
  },
  textInputBorder: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#cdcdcd',
  },
  textInput: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderStyle: 'solid',
  },
  btnSearch: {
    backgroundColor: '#FBBE00',
    marginTop: 10,
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    color: '#ffffff',
  }
})

export default FormSearch;
