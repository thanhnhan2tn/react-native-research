import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import Feed from '../Feed';
import styles from './styles';

function Main({ listMainFeedBack }) {
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

Main.propTypes = {
  listMainFeedBack: PropTypes.object,
};

Main.defaultProps = {
  listMainFeedBack: {},
};

export default Main;
