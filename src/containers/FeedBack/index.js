import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import { Header } from './Header';
import { Banner } from './Banner';
import { Main } from './Main';
import { styles } from './style';

export class FeedBack extends React.Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation}/>
        <Banner/>
        <Main/>
      </View>
    );
  }
}

FeedBack.propTypes = {
  navigation: PropTypes.object,
}
