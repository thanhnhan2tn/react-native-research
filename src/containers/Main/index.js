import React, { Component } from 'react';
import { ScrollView, View, Text, ImageBackground, TouchableOpacity, Animated } from 'react-native';
import Rating from '../../components/RatingBar';
import { connect } from 'react-redux';
import styles from './style';
import Header from '../../components/Header';
import assets from '../../config/assets';
import InformationView from '../Information';
import FeedBackView from '../FeedBack';
import RestaurantMenu from '../RestaurantMenu';

const MENU_VIEW = 0;
const FEEDBACK_VIEW = 1;
const INFORMATION_VIEW = 2;
const AnimatedImageBackground = Animated.createAnimatedComponent(ImageBackground);
// const AnimatedMenu = Animated.createAnimatedComponent(RestaurantMenu)
class Main extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => {
          navigation.dispatch({ type: 'back' });
        }}
        titleLeft="Cancel"
        iconRight={assets.shoppingCart}
        noTitle={false}
      />
    ),
  }
  constructor(props) {
    super(props)
    const currentData = this.props.navigation.state.params.currentData;
    this.state = {
      currentBottomView: MENU_VIEW,
      currentData,
      scrollAnimatedValue: new Animated.Value(0),
    }
  }

  onPressTab = (value) => {
    if (this.state.currentBottomView !== value) {
      console.log('onPressTab', value)
      this.setState({
        currentBottomView: value,
      })
    }
  }
  renderBottomView = () => {
    if (this.state.currentBottomView === MENU_VIEW) {
      let translateY = this.state.scrollAnimatedValue.interpolate({
        inputRange: [0, 100],
        outputRange: [0, 100],
        extrapolate: 'clamp',
      });
      return (
        <RestaurantMenu
          currentData={this.state.currentData}
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
          style={[{
            // transform: [{ scaleY: -100 }],
            // transform: [{ translateY }]
          }]}
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { y: this.state.scrollAnimatedValue } } }],
              { useNativeDriver: true }
            )
          }
          scrollEventThrottle={16}
        />
      )
    }
    if (this.state.currentBottomView === FEEDBACK_VIEW) {
      return (
        <FeedBackView />
      )
    }
    if (this.state.currentBottomView === INFORMATION_VIEW) {
      return (
        <InformationView />
      )
    }

  }

  componentDidMount = () => {
    // this.state.scrollAnimatedValue.addListener(Animated.event([{ value: this.state.scrollAnimatedValue }], { useNativeDriver: false }));
    // Animated.spring(this.state.scale, { toValue: -50 }).start();
    // Animated.timing(this.state.scrollAnimatedValue, {
    //   toValue: 60,
    //   duration: 2000,
    // }).start();
  };

  render() {
    let translateY = this.state.scrollAnimatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -100],
      extrapolate: 'clamp',
    });
    let height = this.state.scrollAnimatedValue.interpolate({
      inputRange: [0, 90],
      outputRange: [250, 150],
      extrapolate: 'clamp',
    })

    return (
      <View

        style={styles.container}
      >
        <AnimatedImageBackground
          shouldRasterizeIOS={true}
          renderToHardwareTextureAndroid={true}
          style={[styles.imageBackground, {
            // height

            // transform: [{ translateY }],
            // transform: [{ scaleY: 50 }]

          }]}
          source={assets.food2}>
          <View style={styles.overlay} />
          <View

            style={[styles.imageContainer,
              // { transform: [{ translateY }] }
            ]}>
            <View style={styles.titleContainer}>
              <Text style={styles.textTitle}>FIT FOOD</Text>

              <View style={styles.labelContainer}>
                <Text style={styles.textLabel}>
                  Healthy food
              </Text>
                <Rating
                  type="star"
                  readonly={true}
                  ratingBackgroundColor='transparent'
                  imageSize={12}
                  style={{ marginRight: 10 }}
                  startingValue={3}
                />
              </View>
            </View>
            <View style={styles.navigationContainer}>
              <TouchableOpacity
                style={this.state.currentBottomView === MENU_VIEW ?
                  styles.selectedButtonContainer : styles.buttonContainer}
                onPress={() => { this.onPressTab(MENU_VIEW) }}
              >
                <Text
                  style={this.state.currentBottomView === MENU_VIEW ?
                    styles.selectedButtonText : styles.buttonText}
                >
                  Menu
                </Text>
              </TouchableOpacity>
              <View style={styles.verticalLine} />
              <TouchableOpacity
                onPress={() => { this.onPressTab(FEEDBACK_VIEW) }}
                style={this.state.currentBottomView === FEEDBACK_VIEW ?
                  styles.selectedButtonContainer : styles.buttonContainer}
              >
                <Text
                  style={this.state.currentBottomView === FEEDBACK_VIEW ?
                    styles.selectedButtonText : styles.buttonText}
                >Feedback
                  </Text>
              </TouchableOpacity>
              <View style={styles.verticalLine} />
              <TouchableOpacity
                onPress={() => { this.onPressTab(INFORMATION_VIEW) }}
                style={this.state.currentBottomView === INFORMATION_VIEW ?
                  styles.selectedButtonContainer : styles.buttonContainer}
              >
                <Text style={this.state.currentBottomView === INFORMATION_VIEW ?
                  styles.selectedButtonText : styles.buttonText}
                >
                  Information
                  </Text>
              </TouchableOpacity>
            </View>
          </View>
        </AnimatedImageBackground>

        <View style={styles.bottomView}>
          <this.renderBottomView />
        </View>
        {/* </ScrollView> */}
      </View>
    )
  };
}

mapStateToProps = state => ({

});
export default connect(mapStateToProps)(Main);
