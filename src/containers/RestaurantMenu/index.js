import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';


class RestaurantMenu extends React.Component {
  componentDidMount() {
    console.log(this.props.restaurant);
    this.props.fetchDish(restaurant.dishes);
  }

  render() {
    const { restaurant } = this.props;
    return (
      <View>
        <Text>RestaurantMenu is running...</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  fetchDish: (dishes) => dispatch({ type: 'FETCH_DISHES' })
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantMenu);
