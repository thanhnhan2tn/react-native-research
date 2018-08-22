import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, ImageBackground, Picker, TouchableOpacity,
  Image, FlatList, Animated, Easing, ScrollView, Platform,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import { incrementAction } from '../../actions';
import { GET_LIST_RESTAURANT } from '../../actions/actionTypes';
import { HorizontalLine } from '../../components/line';
import ImageItem from '../../components/ImageItem';
import styles from './styles';
import { selectCount } from './selectors';
import assets from '../../config/assets';
import { MOCKUP_LIST_RECOMMEND } from '../../utils/constants';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import PickerIOS from '../../components/PickerIOS';

const marginRightValue = {
  inputRange: [0, 1],
  outputRange: [-300, 0],
};
const marginLeftValue = {
  inputRange: [0, 1],
  outputRange: [300, 0],
};
const animTiming = {
  toValue: 1,
  duration: 400,
  easing: Easing.linear,
};
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen',
    header: () => (
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
    animRecommendContainer: new Animated.Value(0),
    pickerData: [
      {
        label: 'Paris',
        value: 'paris',
      },
      {
        label: 'London',
        value: 'london',
      },
    ],
  }
  componentDidMount = async () => {
    Animated.stagger(
      100,
      [
        Animated.timing(this.state.animLocationContainer, animTiming),
        Animated.timing(this.state.animButtonContainer, animTiming),
        Animated.timing(this.state.animRecommendContainer, animTiming),
      ],
    ).start();
  };

  render() {
    const { navigation } = this.props;
    const marginRightLocationContainer = this.state.animLocationContainer;
    marginRightLocationContainer.interpolate(marginRightValue);
    const marginLeftLocationContainer = this.state.animLocationContainer;
    marginLeftLocationContainer.interpolate(marginLeftValue);
    const marginRightButtonContainer = this.state.animButtonContainer.interpolate(marginRightValue);
    const marginLeftButtonContainer = this.state.animButtonContainer.interpolate(marginLeftValue);
    const marginRightRecommendContainer = this.state.animRecommendContainer;
    marginRightRecommendContainer.interpolate(marginRightValue);
    const marginLeftRecommendContainer = this.state.animRecommendContainer;
    marginLeftRecommendContainer.interpolate(marginLeftValue);
    return (
      <ScrollView style={styles.container}>
        <PickerIOS
          ref={(picker) => { this.picker = picker; }}
          style={{ flex: 1 }}
          pickerData={this.state.pickerData}
        />
        <ImageBackground
          style={styles.imageBackground}
          source={assets.foodImage}
        >
          <View style={styles.locationContainer}>
            <Animated.View
              style={[styles.iconContainer, {
                marginLeft: marginLeftLocationContainer,
                marginRight: marginRightLocationContainer,
              }]}
            >
              <View style={styles.halfIconContainer1} />
              <View style={styles.halfIconContainer2} />
              <Image
                style={styles.locationIcon}
                source={assets.locationIcon}
              />
            </Animated.View>
            <Animated.View style={{
              marginLeft: marginLeftLocationContainer,
              marginRight: marginRightLocationContainer,
              backgroundColor: '#ffffff',
              paddingBottom: 40,
            }}
            >
              {
                Platform.OS === 'android' ?
                  <View style={styles.pickerContainer}>
                    <Picker
                      style={styles.picker}
                      selectedValue={this.state.city}
                      onValueChange={itemValue => this.setState({ city: itemValue })}
                    >
                      <Picker.Item
                        label={this.state.pickerData[0].label}
                        value={this.state.pickerData[0].value}
                      />
                      <Picker.Item
                        label={this.state.pickerData[1].label}
                        value={this.state.pickerData[1].value}
                      />
                    </Picker>
                    <Icon name="expand-more" size={30} color={colors.black} style={styles.icon} />
                  </View> :
                  <View>
                    <TouchableOpacity
                      style={styles.pickerIOS}
                      onPress={() => { this.picker.toggleModal(true); }}
                    >
                      <Text>{this.state.pickerData[0].label}</Text>
                      <Icon name="expand-more" size={30} color={colors.black} style={styles.icon} />
                    </TouchableOpacity>
                  </View>
              }
              <HorizontalLine />
              <TouchableOpacity
                onPress={() => {
                  navigation.dispatch({ type: 'detail', text: 'Hello from Home' });
                }}
              >
                <Text style={styles.text}>Your address</Text>
              </TouchableOpacity>

            </Animated.View>
            <Animated.View style={[
              {
                marginLeft: marginLeftButtonContainer,
                marginRight: marginRightButtonContainer,
              }, styles.buttonContainer]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.fetchListRestaurant();
                  navigation.dispatch({ type: 'restaurants' });
                }}
              >
                <Text style={styles.buttonText}>Search food</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </ImageBackground>
        <Animated.View
          style={[styles.recommendContainer, {
            marginLeft: marginLeftRecommendContainer,
            marginRight: marginRightRecommendContainer,
          }]}
        >
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
                text={item.text}
              />
            )}
          />
        </Animated.View>
      </ScrollView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  fetchListRestaurant: PropTypes.func,
};

HomeScreen.defaultProps = {
  navigation: {},
  fetchListRestaurant: () => { },
};

const mapStateToProps = state => ({
  count: selectCount(state),
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementAction()),
  fetchListRestaurant: () => dispatch({ type: GET_LIST_RESTAURANT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
