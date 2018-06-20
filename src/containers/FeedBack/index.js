import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

// import { Header } from './Header';
import Header from 'components/Header';
import { Banner } from './Banner';
import { Main } from './Main';
import assets from 'config/assets';
import { styles } from './style';

export class FeedBack extends React.Component {

  static navigationOptions = {
    header: ({ navigation }) => {
      const { defaultProps } = FeedBack;
      return (
        <Header
          onPressLeft={() => {
            navigation.dispatch({ type: 'home' })
          }}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle
        />
      );
    }
  }

  render() {
    const { navigation } = this.props;
    const { navigation: { state } } = this.props;
    return (
      <View style={styles.container}>
        {/*<Header navigation={navigation}/>*/}
        <Banner/>
        <Main/>
      </View>
    );
  }
}

FeedBack.propTypes = {
  navigation: PropTypes.object,
  titleLeft: PropTypes.string,
}

FeedBack.defaultProps = {
  titleLeft: 'Back',
};
