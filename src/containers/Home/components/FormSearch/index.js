import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  Button,
  Picker,
  StyleSheet,
  Alert,
  Animated,
  TouchableHighlight,
} from 'react-native';
import counTry from 'data/homeCountry.js';

class FormSearch extends Component {

  state = {
    animation: {
      fadeAnim: new Animated.Value(0),
      moveContainText: new Animated.Value(0),
    }
    
  }

  focusTextInput = () => {
    // Alert.alert('000');
  }

  componentDidMount() {
    // Animated.timing(
    //   this.state.animation.fadeAnim,
    //   // this.state.animation.moveContainText,
    //   {
    //     toValue: 1,
    //     duration: 1000,
    //   }
    // ).start();

    Animated.timing(
      this.state.animation.moveContainText,
      {
        toValue: 1,
        duration: 4000,
        // easing: Easing.linear
      }
    ).start(
      // () => this.spin()
    )
  }

  render() {
    Alert.alert(window.screen.width);
    let { animation } = this.state;
    // let test = animation.moveContainText.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg'],
    // });
    // let test2 = animation.moveContainText.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [window.screen.width, 0],
    // });
    
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            // transform: [{translateX: test}]
            // transform: [{translateX: test2}]
          }}
        >
          <View style={styles.containerTextInput}>
            <View style={[styles.textInput, styles.textInputBorder]}>
              <Picker
                selectedValue={'en'}
                onValueChange={(itemValue, itemIndex) => {}}>
                {
                  counTry.map((item) =>
                    <Picker.Item label={item.title} value={item.title} />
                  )
                }
              </Picker>
            </View>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid='transparent'
              onFocus={() => { this.focusTextInput() }}
              placeholder="Your address"
            />
          </View>
        </Animated.View>

        <Animated.View
          style={{
            opacity: animation.fadeAnim
          }}
        >
          <TouchableHighlight>
            <Text style={styles.btnSearch}>asdasd</Text>
          </TouchableHighlight>
        </Animated.View>

        {/* <Animated.View
          style={{
            opacity: animation.fadeAnim
          }}
        >
          <TouchableHighlight>
            <Text style={styles.btnSearch}>asdasd</Text>
          </TouchableHighlight>
        </Animated.View> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 30,
    paddingBottom: 30,
    width: '100%',
    backgroundColor: 'transparent',
  },
  containerTextInput: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    backgroundColor: '#fff',
    color: '#000'
  },
  textInputBorder: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#cdcdcd',
  },
  btnSearch: {
    backgroundColor: '#FBBE00',
    marginTop: 5,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    color: '#fff',
  }
})

export default FormSearch;
