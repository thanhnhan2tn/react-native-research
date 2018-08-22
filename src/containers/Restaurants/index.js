import React, { Component } from 'react';
import { View, FlatList, Text, Animated, Easing } from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import styles from './style';
import Header from '../../components/Header';
import AddressBar from '../../components/AddressBar';
import RestaurantItem from '../../components/RestaurantItem';
import { selectRestaurants } from './selectors';
import colors from '../../styles/colors';

class Restaurants extends Component {
  static navigationOptions = {
    header: ({ navigation }) => (
      <Header
        onPressLeft={() => {
          navigation.dispatch({ type: 'home' });
        }}
        titleLeft="Cancel"
        titleRight="Done"
        noTitle={false}
      />
    ),
  }
  constructor(props) {
    super(props);
    this.animatedValue = [];
  }
  componentWillReceiveProps = (nextProps) => {
    nextProps.listRestaurant.forEach((element, index) => {
      this.animatedValue[index] = new Animated.Value(0);
    });
  };
  componentDidUpdate = () => {
    this.animate();
  };
  animate = () => {
    const animations = this.props.listRestaurant.map((item, index) => (
      Animated.timing(
        this.animatedValue[index],
        {
          toValue: 1,
          duration: 300,
          easing: Easing.linear,
        },
      )));
    Animated.stagger(100, animations).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <AddressBar style={styles.addressbar} />
        <FlatList
          style={styles.listRestaurant}
          data={this.props.listRestaurant}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            let rotateX = '0deg';
            if (this.animatedValue[index] !== undefined) {
              rotateX = this.animatedValue[index].interpolate({
                inputRange: [0, 1],
                outputRange: ['-90deg', '0deg'],
              });
            }
            return (
              <Animated.View
                style={{ transform: [{ rotateX }] }}
              >
                <RestaurantItem dataItem={item} />
              </Animated.View>);
          }}
          ListFooterComponent={() => (
            <View style={{ height: 50 }} />
          )}
        />
        <View style={styles.lastView}>
          <Icon name="align-left" color={colors.red} size={15} style={{ marginRight: 5 }} />
          <Text style={{ color: colors.red, margin: 5 }}>KITCHEN</Text>
          <Text style={{ fontSize: 12 }}>Italian, Japanese, Healthy food, Geogrian,...</Text>
        </View>
      </View>
    );
  }
}
Restaurants.propTypes = {
  listRestaurant: PropTypes.any,
};
Restaurants.defaultProps = {
  listRestaurant: [],
};
const mapStateToProps = state => ({
  listRestaurant: selectRestaurants(state),
});

export default connect(mapStateToProps)(Restaurants);
