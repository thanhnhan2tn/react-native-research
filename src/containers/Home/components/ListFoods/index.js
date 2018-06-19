import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

import listFoods from 'data/homeListFoods.js';

class ListFoods extends Component {
  render() {
    return (
      <Animated.View>
        <Text>We recommend</Text>
        {/* <ScrollView>
          <FlatList
            data={listFoods}
            renderItem={({item}) =>
              <View>
                <Text>{item.title}</Text>
              </View>
            }
          />
        </ScrollView> */}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.25,
  }
})

export default ListFoods;
