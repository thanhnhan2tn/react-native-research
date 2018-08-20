import React from 'react';
import PropTypes from 'prop-types';
import { BackHandler, View, TextInput, ImageBackground, FlatList, Animated, Easing, KeyboardAvoidingView } from 'react-native';
import { MOCKUP_LIST_ADDRESS } from '../../utils/constants'
import Header from '../../components/Header';
import assets from '../../config/assets';
import styles from './style'
import LocationItem from '../../components/LocationItem';

const marginTopValue = {
  inputRange: [0, 1],
  outputRange: [100, 0]
}
const marginBottomValue = {
  inputRange: [0, 1],
  outputRange: [-100, 0]
}
const animTiming = {
  toValue: 1,
  duration: 300,
  easing: Easing.linear,
}
export default class Details extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => {
          navigation.dispatch({ type: 'home' });
        }}
        // iconLeft={assets.backIcon}
        titleLeft="Cancel"
        titleRight="Done"
        noTitle={false}
      />
    ),
  }
  state = {
    listAddress: MOCKUP_LIST_ADDRESS,
    animation: new Animated.Value(0)
  }
  handleBack = () => {
    const { navigation } = this.props;
    navigation.dispatch({ type: 'home' });
  }
  componentDidMount = () => {
    Animated.timing(this.state.animation, animTiming).start()
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }
  componentWillUnmount = () => {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  };

  handleBackPress = () => {
    this.props.navigation.dispatch({ type: 'home' })
    return true;
  }
  handleTextChange = text => {
    
  }
  render() {
    const { navigation: { state } } = this.props;
    const marginTop = this.state.animation.interpolate(marginTopValue)
    const marginBottom = this.state.animation.interpolate(marginBottomValue)
    return (

      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={assets.foodImage}>
          <Animated.View style={{ marginBottom, marginTop, width: '100%', alignItems: 'center', }}>
            <TextInput
              autoFocus={true}
              underlineColorAndroid={'transparent'}
              placeholder="Your address"
              style={styles.textInput}
              onChangeText={text => { this.handleTextChange(text) }} />
          </Animated.View>
        </ImageBackground>

        <Animated.View style={[styles.addressContainer, { marginBottom, marginTop }]}>
          <KeyboardAvoidingView
            enabled
            keyboardVerticalOffset={230}
            behavior='padding'>
            <FlatList
              data={this.state.listAddress}
              keyExtractor={(item, index) => index + ''}
              renderItem={({ item }) => (
                <LocationItem
                  type={item.type}
                  address={item.address}
                />
              )}
            />
          </KeyboardAvoidingView>
        </Animated.View>

      </View>
    );
  }
}

Details.propTypes = {
  navigation: PropTypes.object,
};

Details.defaultProps = {
  navigation: {},
};
