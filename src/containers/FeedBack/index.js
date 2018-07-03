import React from 'react';
import { View } from 'react-native';

import assets from 'config/assets';
import Header from 'components/Header';
import listMainFeedBack from 'data/listMainFeedBack';
import Banner from './Banner';
import Main from './Main';
import styles from './styles';

export default class FeedBack extends React.PureComponent {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { defaultProps } = FeedBack;
      return (
        <Header
          onPressLeft={() => {
            navigation.goBack();
          }}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle={true}
        />
      );
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <Banner />
        <Main listMainFeedBack={listMainFeedBack} />
      </View>
    );
  }
}

FeedBack.defaultProps = {
  titleLeft: 'Back',
};
