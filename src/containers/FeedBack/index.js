import React from 'react';
import { View } from 'react-native';

import listMainFeedBack from 'data/listMainFeedBack';
import Main from './Main';
import styles from './styles';

const FeedBack = () => (
  <View style={styles.container}>
    <Main listMainFeedBack={listMainFeedBack} />
  </View>
);

export default FeedBack;
