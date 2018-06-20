import React, { Component } from 'react';
import {
  View,
  TextInput,
  Text,
  Image ,
  Button,
  Picker,
  StyleSheet,
  Animated,
  Alert,
  TouchableHighlight,
  Dimensions,
  FlatList,
  Easing
} from 'react-native';

import MyBgImage from 'components/MyBgImage';
import counTry from 'data/homeCountry.js';
import listFoods from 'data/homeListFoods.js';
import listMenuSearch from 'data/homeMenuSearch.js';


class FormSearch extends Component {
  constructor (props) {
    super(props);
    const { width, height } = Dimensions.get('window');
    this.state = {
      showMenu: false,
      widthScreen: width,
      heightScreen: height,
      country: '',
      animation: {
        fadeAnim: new Animated.Value(0),
        moveLeft: new Animated.Value(width),
        paddingBox: new Animated.Value(100),
        flex: {
          flexForm: new Animated.Value(0.7),
          flexList: new Animated.Value(0.3),
        },
        btnSearchAnim: {
          left: new Animated.Value(width),
          top: new Animated.Value(0),
          position: 'relative',
          height: new Animated.Value(50),
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
    this.setState({
      showMenu: false,
    });
    // show select country
    Animated.parallel([
      Animated.timing(
        this.state.animation.paddingBox,
        {
          toValue: 100,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.countryAnim.height,
        {
          toValue: 50,
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
          toValue: 50,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.flex.flexForm,
        {
          toValue: 0.7,
          duration: 300,
          easing: Easing.linear,
        },
      ),
      Animated.timing(
        this.state.animation.flex.flexList,
        {
          toValue: 0.3,
          duration: 300,
          easing: Easing.linear,
        },
      ),
    ]).start();
  }

  minifyPadding() {
    this.setState({
      showMenu: true,
    });
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
      ),
      Animated.timing(
        this.state.animation.btnSearchAnim.height,
        {
          toValue: 0,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.flex.flexForm,
        {
          toValue: 0.3,
          duration: 300,
          easing: Easing.linear
        }
      ),
      Animated.timing(
        this.state.animation.flex.flexList,
        {
          toValue: 0.7,
          duration: 300,
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

    let ITEM_HEIGHT = 100;
    const resizeMode = 'center';
    // console.warn(listMenuSearch);
    return (
      <View style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
      }}>
        {/* container form search */}
        <Animated.View style={[
            styles.container,
            {
              flex: animation.flex.flexForm
              // paddingTop: animation.paddingBox,
              // paddingBottom: animation.paddingBox,
            }
          ]}
          onLayout={this.onLayout}
        >
          <MyBgImage
            source={require('assets/bg/bg_pizza.png')}
            resizeMode='cover'
          />
          {/* container text input */}
          <View style={styles.containerForm}>
            <Animated.View
              style={[
                ...styles.containerTextInput,
                {
                  left: animation.moveLeft
                }
              ]}
            >
              <Animated.View style={
                [
                  styles.textInput, styles.textInputBorder,
                  {
                    height: animation.countryAnim.height,
                    borderBottomWidth: animation.countryAnim.borderWidth,
                  },
                ]
              }>
                <Picker
                  selectedValue={country ? country : counTry[0].title}
                  onValueChange={(itemValue, itemIndex) => {
                    this.setState({
                      country: itemValue
                    }
                  )}}
                >
                  {counTry.map((item) =>
                    <Picker.Item
                      key={item.title}
                      label={item.title}
                      value={item.title}
                    />
                  )}
                </Picker>
              </Animated.View>
              
              <TextInput
                style={styles.textInput}
                underlineColorAndroid='transparent'
                onFocus={() => { this.focusTextInput() }}
                onBlur={() => { this.blurTextInput() }}
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
                <Text style={styles.btnSearch}>Search Food2</Text>
              </TouchableHighlight>
            </Animated.View>
          </View>
        </Animated.View>

        {/* container List Foods*/}
        <Animated.View
            style={[
              {
                backgroundColor: '#f5f0eb',
                width: '100%',
                flex: animation.flex.flexList,
              }
            ]}
          >
            <View style={[
                styles.containerMenuFlatList,
                {
                  display: this.state.showMenu ? 'flex' : 'none',
                }
              ]}
            >
            
              <FlatList
                data={listMenuSearch.listMenu}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) =>
                  <View style={styles.itemMenuFlatlist}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                  </View>
                }
              />

              <FlatList
                data={listMenuSearch.listResult}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) =>
                  <View style={styles.itemMenuFlatlist}>
                    <Text style={styles.titleItem}>{item.title}</Text>
                  </View>
                }
              />
            </View>
            
            <View style={[
              styles.containerList,
              {
                display: this.state.showMenu ? 'none' : 'flex',
              }
            ]}>
              
              <Text style={styles.titleList}>We recommend</Text>
              <FlatList
                style={styles.containerFlatList}
                horizontal={true}
                data={listFoods}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) =>
                  <View style={styles.itemFlatlist}>
                    <Image
                      source={{uri: item.image}}
                      style={{
                        flex: 1,
                        width: 150,
                      }}
                    />
                    <Text style={styles.titleItem}>{item.title}</Text>
                  </View>
                }
              />
            </View>
          </Animated.View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
  },
  containerForm: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  containerList: {
    flex: 1,
    width: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  containerMenuList: {
    flex: 1,
  },
  containerFlatList: {
    width: '100%',
    marginTop: 10,
  },
  itemFlatlist: {
    marginRight: 15,
  },
  containerMenuFlatList: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
  },
  itemMenuFlatlist: {
    height: 50,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 11,
    paddingBottom: 10,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#cdcdcd',
  },
  titleList: {
    fontSize: 18,
  },
  titleItem: {
    fontSize: 15,
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
