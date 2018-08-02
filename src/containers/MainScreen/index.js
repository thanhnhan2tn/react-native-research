import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import data from 'data/listMainScreen';
import ListItem from './components/ListItem';
import Header from './components/Header';
import Footer from './components/Footer';

export default class MainScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},
  };
  openScreen = (id, store) => {
    this.props.navigation.navigate('detail', {
      itemId: id,
      store,
    });
  };

  render() {
    return (
      <View style={{
 flex: 1, display: 'flex', flexDirection: 'column', marginTop: 65,
}}
      >
        <Header />
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
