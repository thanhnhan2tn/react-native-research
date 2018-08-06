import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import data from 'data/listMainScreen';
// component
import ListItem from './components/ListItem';
import Header from './components/Header';
import Footer from './components/Footer';

export default class MainScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  };

  openScreen = (id, store) => {
    this.props.navigation.navigate('detail', { id, store });
  };

  render() {
    const { navigation } = this.props;
    const location = navigation.getParam('location', '');
    const address = navigation.getParam('address', '');
    return (
      <View style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginTop: 65,
        }}
      >
        <Header
          location={location}
          address={address}
        />
        <ListItem
          handleClickItem={this.openScreen}
          dataSource={data.list}
        />
        <Footer
          icon={assets.category}
          title="kitchen"
          info="Italian, Japanese, Healthy food Italian, Japanese, Healthy food Italian, Japanese, Healthy food"
        />
      </View>
    );
  }
}
