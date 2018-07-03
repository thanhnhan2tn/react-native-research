import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import Feed from '../Feed';
import styles from './styles';

export default class Main extends React.PureComponent {
  render() {
    const { list, tabs } = this.props.listMainFeedBack;
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

Main.propTypes = {
  listMainFeedBack: PropTypes.object,
  list: PropTypes.array,
  tabs: PropTypes.array,
};

Main.defaultProps = {
  listMainFeedBack: {},
  list: [],
  tabs: [],
};
