import React from 'react';
import { StatusBar, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
// image
import assets from 'config/assets';
// Data
import data from 'data/listStoreAtHome';
// Component
import ListFood from './ListFood';
import Location from './Location';
// Style
import styles from './styles';

export default class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},
  };
  openScreen = (store) => {
    this.props.navigation.navigate('detail', { store });
  };
  openScreenSearch = (location) => {
    this.props.navigation.navigate('search', { location });
  };

  render() {
    return (
      <ImageBackground
        source={assets.banner}
        style={styles.wrapBackground}
      >
        <StatusBar
          backgroundColor="rgba(200,0,0,0.8)"
          translucent={true}
          style={styles.wrapOverlay}
        />
        <Location
          clickSearch={this.openScreenSearch}
          handleOpen={this.openScreenSearch}
        />
        <ListFood
          handleClickItem={this.openScreen}
          dataSource={data.list}
        />
      </ImageBackground>
    );
  }
}
