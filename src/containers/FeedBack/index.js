import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import getFeedback, { selectFeedback } from './selectors';
import listMainFeedBack from 'data/listMainFeedBack';
import Main from './Main';
import styles from './styles';

class FeedBack extends React.Component {
  componentDidMount() {
    const {
      fetchFeedbacks,
      restaurant
    } = this.props;
    // const { feedback } = restaurant;

    fetchFeedbacks(restaurant.feedback);
  }

  render() {
    const { feedbackList } = this.props;

    console.log(this.props.feedbackList);
    return (
      <View styles={{ flex: 1 }}>
        <Main feedbackList={feedbackList} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  feedbackState: getFeedback(state),
  feedbackList: selectFeedback(state),
})

const mapDispatchToProps = dispatch => ({
  fetchFeedbacks: (feedback) => dispatch({ type: 'FETCH_FEEDBACKS', feedback })
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedBack);
