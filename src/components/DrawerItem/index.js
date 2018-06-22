import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import assets from 'config/assets';
import { redirectTo } from 'actions/navigationActions';
import styles from './styles';

const listItems = [
  {
    title: 'Home',
    icon: assets.home,
    route: 'home',
  },
  {
    title: 'TabView Demo',
    icon: assets.home,
    route: 'tabview',
  },
  {
    title: 'Restaurant Info',
    icon: assets.home,
    route: 'restaurantInfo',
  },
  {
    title: 'List Restaurants',
    icon: assets.home,
    route: 'listRes',
  },
];

class DrawerItem extends Component {
  finishcurrent = (screen) => {
    this.props.navigation.dispatch(redirectTo(screen));
  }

  render() {
    return (
      <View>
        {
          listItems.map(({ title, icon, route }) => (
            <TouchableOpacity
              key={title}
              onPress={() => this.finishcurrent(route)}
              style={styles.row}
            >
              <Image style={styles.icon} source={icon} />
              <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    );
  }
}

DrawerItem.propTypes = {
  navigation: PropTypes.object,
};

DrawerItem.defaultProps = {
  navigation: {},
};

export default DrawerItem;
