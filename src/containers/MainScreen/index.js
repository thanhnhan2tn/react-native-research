import React from 'react';
import {
  View,
  ScrollView,
} from 'react-native';

import assets from 'config/assets';
import Location from './Location';
import Item from './Item';
import Footer from './Footer';
import styles from './style';


export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          key: 'Item 1', img: assets.item, providers: 'Italian', price: 10, min: 25, stars: { ratings: 3 },
        },
        {
          key: 'Item 2', img: assets.item, providers: 'Italian', price: 5, min: 35, stars: { ratings: 2 },
        },
        {
          key: 'Item 3', img: assets.item, providers: 'Italian', price: 10, min: 25, stars: { ratings: 3 },
        },
        {
          key: 'Item 4', img: assets.item, providers: 'Italian', price: 5, min: 35, stars: { ratings: 2 },
        },
        {
          key: 'Item 5', img: assets.item, providers: 'Italian', price: 10, min: 25, stars: { ratings: 3 },
        },
      ],
    };
  }

  genList = list => list.map(item => <Item key={item.key} item={item} />)
  render() {
    const { list } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView>
          <Location />
          {this.genList(list)}
        </ScrollView>
        <Footer />
      </View>
    );
  }
}
