import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';

import { Tabs } from '../Tabs';
import { Feed } from '../Feed';
import { styles } from './style';

export class Main extends React.Component {
  render() {
    const list = [
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command', stars: 3},
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command', stars: 2},
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command', stars: 3},
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command', stars: 2},
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command', stars: 3},
      {name: 'Nefitari Menphusor', body: 'Lorem is not recognized as an internal or external command', stars: 2}
    ]
    return (
      <View style={styles.container}>
        <Tabs/>
        <ScrollView style={styles.listFeed}>
          {list.map((feed, i) =>
            <Feed key={i}
              name={feed.name}
              body={feed.body}
              stars={feed.stars}
            />
          )}
        </ScrollView>
      </View>
    );
  }
}
