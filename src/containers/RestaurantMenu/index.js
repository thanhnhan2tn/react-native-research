import React, { Component } from 'react';
import { FlatList, Animated } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_DISH } from '../../actions/actionTypes';
import { selectListDish } from './selectors';
import DishItem from '../../components/DishItem';

const AnimatedFlatlist = Animated.createAnimatedComponent(FlatList)
class RestaurantMenu extends Component {
  constructor(props) {
    super(props)
  }
  componentWillMount = () => {
    const ids = this.props.currentData.dishes;
    this.props.getListDish(ids);
  };

  render() {
    return (
      <AnimatedFlatlist
        shouldRasterizeIOS={this.props.shouldRasterizeIOS} 
        renderToHardwareTextureAndroid={this.props.renderToHardwareTextureAndroid}
        onScroll={this.props.onScroll}
        scrollEventThrottle={this.props.scrollEventThrottle}
        data={this.props.listDish}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <DishItem
            image={item.image}
            title={item.name}
            description={item.description}
            price={item.price}
          />
        )}
      />

    )
  };
}
RestaurantMenu.propTypes = {
  currentData: PropTypes.object,
  listDish: PropTypes.any,
  getListDish: PropTypes.func,
};
RestaurantMenu.defaultProps = {
  currentData: {},
  listDish: [],
  getListDish: () => { },
};
mapStateToProps = state => ({
  // listRestaurant: selectRestaurants(state),
  listDish: selectListDish(state),
})
mapDispatchToProps = dispatch => ({
  getListDish: (ids) => dispatch({ type: GET_DISH, ids }),
})
export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
