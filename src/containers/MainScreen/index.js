import React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native';

import Location from './Location';
import Item from './Item';
import Footer from './Footer';
import styles from './style';

export default class MainScreen extends React.Component {

  genList = (list) => {
    return list.map((item, i) => <Item key={i} item={item}/>)
  }

  render() {
    const list = [
      {key: 'Item 1', img: require('./images/item.jpg'), providers: 'Italian', price: 10, min: 25, stars: {ratings: 3}},
      {key: 'Item 2', img: require('./images/item.jpg'), providers: 'Italian', price: 5, min: 35, stars: {ratings: 2}},
      {key: 'Item 3', img: require('./images/item.jpg'), providers: 'Italian', price: 10, min: 25, stars: {ratings: 3}},
      {key: 'Item 4', img: require('./images/item.jpg'), providers: 'Italian', price: 5, min: 35, stars: {ratings: 2}},
      {key: 'Item 5', img: require('./images/item.jpg'), providers: 'Italian', price: 10, min: 25, stars: {ratings: 3}}
    ]
    return (
      <View style={styles.container}>
        <ScrollView>
          <Location/>
          {this.genList(list)}
        </ScrollView>
        <Footer/>
      </View>
    );
  }
}
