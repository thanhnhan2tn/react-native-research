import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import Feed from '../Feed';
import styles from './styles';

export default class Main extends React.PureComponent {
  render() {
    const { feedbackList } = this.props;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.listFeed}>
          {
            feedbackList.map(({ _id, username, review_text, ratting }) =>
            (
              <Feed
                key={_id}
                name={username}
                body={review_text}
                stars={ratting}
              />
            ))
          }
        </ScrollView>
      </View>
    );
  }
}

Main.propTypes = {
  listMainFeedBack: PropTypes.object,
  list: PropTypes.array,
};

Main.defaultProps = {
  listMainFeedBack: {},
  list: [],
};
