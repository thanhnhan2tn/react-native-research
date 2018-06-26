import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import listMainFeedBack from 'data/listMainFeedBack';
import Tabs from '../Tabs';
import Feed from '../Feed';
import styles from './styles';


function Main() {
  const { list, tabs } = listMainFeedBack;
  return (
    <View style={styles.container}>
      <Tabs arrTabs={tabs} />
      <ScrollView style={styles.listFeed}>
        { list.map(({
            id, name, body, stars,
          }) =>
          (<Feed
            key={id}
            name={name}
            body={body}
            stars={stars}
          />))
        }
      </ScrollView>
    </View>
  );
}

export default Main;
