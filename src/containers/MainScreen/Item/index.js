import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import { Rating } from '../Rating';
import styles from './style';

export default class Item extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <View style={styles.products}>

        <View style={styles.product_infor}>
          <View style={styles.wrap_title}>
            <Text style={styles.product_title}>{item.key}</Text>
            <Rating style={styles.rating} stars={item.stars}/>
          </View>
          <View>
            <Text>{item.providers}</Text>
          </View>
          <View style={styles.product_transport}>
            <View style={styles.item_transpot}>
              <Text>Price discount: </Text>
              <Text style={styles.text_bold}>{item.price} LT</Text>
            </View>
            <View style={styles.item_transpot}>
              <Text>Min: </Text>
              <Text style={styles.text_bold}>{item.min} LT</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
