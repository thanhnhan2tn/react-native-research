import React from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  Image
} from 'react-native';
import imageCart from '../../images/cart.jpg';

export default class MainScreen extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.header_location}>
          <Image
            source={imageCart}
            style={styles.icon_small}
          />
          <View>
            <Text>Title</Text>
          </View>
          <Image
            source={imageCart}
            style={styles.icon_small}
          />
        </View>
        <FlatList
          data={[
            {key: 'List item 1', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3}, 
            {key: 'List item 2', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 3', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 4', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 5', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 6', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 7', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3},
            {key: 'List item 8', img: imageCart, providers: 'Italian', price: 10, time: '1h', min: 25, start: 3, start_number: 3}
          ]}
          renderItem={ ({item}) => 
            <View style={styles.products}>
              <Image
                source={item.img}
                style={styles.product_img}
              />
              <View style={styles.product_infor}>

                <View style={{flexDirection:"row"}}>
                  <Text style={styles.product_title}>{item.key}</Text>
                  <Text>{item.start} - {item.start_number}</Text>
                </View>
                <View>
                  <Text>{item.providers}</Text>
                </View>
                <View style={styles.product_transport}>
                  <View style={styles.item_transpot}>
                    <Image
                      source={imageCart}
                      style={styles.icon_small}
                    />
                    <Text style={styles.text_italic}>${item.price}</Text>
                  </View>
                  <View style={styles.item_transpot_1}>
                    <Image
                      source={imageCart}
                      style={styles.icon_small}
                    />
                    <Text style={styles.text_italic}> {item.time}</Text>
                  </View>
                  <View style={styles.item_transpot_1}>
                    <Image
                      source={imageCart}
                      style={styles.icon_small}
                    />
                    <Text style={styles.text_italic}>MIN ${item.min}</Text>
                  </View>
                </View>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header_location: {
    justifyContent: "space-between",
    padding: 20,
    flexDirection: "row",
    backgroundColor: "yellow"
  },
  products: {
    flex: 1, 
    flexDirection: 'row', 
    padding: 15, 
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  product_img: {
    width: 80, 
    height: 80
  },
  product_infor: {
    paddingLeft: 15,
  },
  product_title: {
    fontWeight: "bold",
    fontSize: 18
  },
  product_transport: {
    paddingTop: 8,
    paddingLeft: 0,
    flex: 1,
    flexDirection: "row",
  },
  item_transpot: {
    borderRightWidth: 1,
    paddingRight: 15,
    paddingLeft: 0,
    flexDirection: "row",
  },
  item_transpot_1: {
    borderRightWidth: 1,
    paddingRight: 15,
    paddingLeft: 15,
    flexDirection: "row",
  },
  icon_small: {
    width: 20,
    height: 20,
  },
  text_italic: {
    fontStyle: 'italic',
    paddingLeft: 5,
  }
})

