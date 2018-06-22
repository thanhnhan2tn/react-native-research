import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import Tabs from '../Tabs';
import Feed from '../Feed';
import styles from './styles';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 1,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command',
          stars: { ratings: 3 },
        },
        {
          id: 2,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command',
          stars: { ratings: 2 },
        },
        {
          id: 3,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command',
          stars: { ratings: 3 },
        },
        {
          id: 4,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command',
          stars: { ratings: 2 },
        },
        {
          id: 5,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command, lorem is not recognized as an internal or external command',
          stars: { ratings: 3 },
        },
        {
          id: 6,
          name: 'Nefitari Menphusor',
          body: 'Lorem is not recognized as an internal or external command',
          stars: { ratings: 2 },
        },
      ],
      tabs: [
        {
          id: 1, title: 'Menu',
        },
        {
          id: 2, title: 'Feedback', active: true,
        },
        {
          id: 3, title: 'Infomation',
        },
      ],
    };
  }
  render() {
    const { list, tabs } = this.state;
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
}
