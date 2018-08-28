import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './style';

const DishItem = (props) => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: props.image}} />
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.textTitle}>{props.title}</Text>
      <Text style={styles.textDescribe}>{props.description}</Text>
    </View>
    <View style={styles.priceContainer}>
      <Text style={styles.textPrice}>${props.price}</Text>
      <Icon style={styles.icon} name="shopping-cart" size={20} />
    </View>
  </View>
)
DishItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};
DishItem.defaultProps = {
  image: '',
  title: '',
  description: '',
  price: 0,
};
export default DishItem;
