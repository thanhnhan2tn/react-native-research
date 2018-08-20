import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ImageBackground, Picker, TextInput, TouchableOpacity,
  Image, FlatList, Animated, Easing, ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { incrementAction } from '../../actions';
import Line from '../../components/line'
import ImageItem from '../../components/ImageItem';
import styles from './styles';
import { selectCount } from './selectors';
import assets from '../../config/assets';
import { MOCKUP_LIST_RECOMMEND } from '../../utils/constants'
import Header from '../../components/Header';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import colors from '../../styles/colors'
const marginRightValue = {
  inputRange: [0, 1],
  outputRange: [-300, 0]
}
const marginLeftValue = {
  inputRange: [0, 1],
  outputRange: [300, 0]
}
const animTiming = {
  toValue: 1,
  duration: 400,
  easing: Easing.linear,
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => { }}
        iconLeft={assets.menu}
        iconRight={assets.shoppingCart}
        noTitle={false}
      />
    ),
  };
  state = {
    city: 'London',
    recommendItem: MOCKUP_LIST_RECOMMEND,
    animLocationContainer: new Animated.Value(0),
    animButtonContainer: new Animated.Value(0),
    animRecommendContainer: new Animated.Value(0)
  }
  componentDidMount = () => {
    Animated.stagger(100, [
      Animated.timing(this.state.animLocationContainer, animTiming),
      Animated.timing(this.state.animButtonContainer, animTiming),
      Animated.timing(this.state.animRecommendContainer, animTiming)
    ]).start()
  };

  render() {
    const { navigation } = this.props;
    const marginRightLocationContainer = this.state.animLocationContainer.interpolate(marginRightValue)
    const marginLeftLocationContainer = this.state.animLocationContainer.interpolate(marginLeftValue)
    const marginRightButtonContainer = this.state.animButtonContainer.interpolate(marginRightValue)
    const marginLeftButtonContainer = this.state.animButtonContainer.interpolate(marginLeftValue)
    const marginRightRecommendContainer = this.state.animRecommendContainer.interpolate(marginRightValue)
    const marginLeftRecommendContainer = this.state.animRecommendContainer.interpolate(marginLeftValue)
    return (

      <ScrollView style={styles.container}>

        <ImageBackground
          style={styles.imageBackground}
          source={assets.foodImage}>

          <View style={styles.locationContainer}>
            <Animated.View style={[styles.iconContainer, { marginLeft: marginLeftLocationContainer, marginRight: marginRightLocationContainer }]}>
              <View style={styles.halfIconContainer1} />
              <View style={styles.halfIconContainer2} />
              <Image
                style={styles.locationIcon}
                source={assets.locationIcon} />
            </Animated.View>
            <Animated.View style={{ marginLeft: marginLeftLocationContainer, marginRight: marginRightLocationContainer, backgroundColor: '#ffffff', paddingBottom: 40 }}>
              <View style={styles.pickerContainer}>
                <Picker
                  style={styles.picker}
                  selectedValue={this.state.city}
                  onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
                  <Picker.Item label="Paris" value="paris" />
                  <Picker.Item label="London" value="london" />
                </Picker>
                <Icon name="expand-more" size={30} color={colors.black} style={styles.icon} />
              </View>
              <Line />
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch({ type: 'detail', text: 'Hello from Home' })
                  console.log('Pressed')
                }}>
                <TextInput
                  placeholder="Your address"
                  underlineColorAndroid="#FFFFFFFF"
                  paddingLeft={10}
                  paddingRight={10}
                  style={{ backgroundColor: '#ffffff' }}
                  editable={false} />
              </TouchableOpacity>

            </Animated.View>
            <Animated.View style={[{ marginLeft: marginLeftButtonContainer, marginRight: marginRightButtonContainer }, styles.buttonContainer]}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Search food</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
        <Animated.View style={[styles.recommendContainer, { marginLeft: marginLeftRecommendContainer, marginRight: marginRightRecommendContainer }]}>
          <Text style={styles.textRecommend}>We recommended</Text>
          <FlatList
            style={styles.list}
            data={this.state.recommendItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.text}
            renderItem={({ item }) => (
              <ImageItem
                source={item.image}
                text={item.text} />
            )}

          />

        </Animated.View>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  incrementCounter: PropTypes.func,
  count: PropTypes.number,
  city: PropTypes.string
};

HomeScreen.defaultProps = {
  navigation: {
    title: 'Test'
  },
  incrementCounter: () => { },
  count: 0,
  city: 'London'
};

const mapStateToProps = state => ({
  count: selectCount(state),
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
