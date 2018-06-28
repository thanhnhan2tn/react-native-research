import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Animated,
  FlatList,
} from 'react-native';
import listFoods from 'data/homeListFoods.js';
import listMenuSearch from 'data/homeMenuSearch.js';
import ItemFood from './ItemFood/';
import ItemMenu from './ItemMenu/';
import styles from './styles';
import {
  WIDTH_SCREEN,
  TIME_DURATION,
  TIME_DELAY,
} from './constants';

class ListFoods extends React.Component {
  constructor() {
    super();
    this.leftBox = new Animated.Value(WIDTH_SCREEN);
  }

  componentDidMount() {
    Animated.timing(
      this.leftBox,
      {
        toValue: 0,
        delay: TIME_DELAY,
        duration: TIME_DURATION,
      },
    ).start();
  }

  render() {
    return (
      <Animated.View
        style={[
          this.props.style,
          styles.contaier,
          {
            left: this.leftBox,
          },
        ]}
      >
        <View style={[
            styles.containerMenuFlatList,
            {
              width: '100%',
              display: this.props.showMenu ? 'flex' : 'none',
            },
          ]}
        >
          <FlatList
            data={listMenuSearch.listMenu}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ItemMenu item={item} />}
          />
        </View>
        <View style={[
            styles.containerList,
            {
              display: this.props.showMenu ? 'none' : 'flex',
            },
          ]}
        >
          <Text style={styles.titleList}>We recommend</Text>
          <FlatList
            style={styles.containerFlatList}
            horizontal={true}
            data={listFoods}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <ItemFood item={item} />}
          />
        </View>
      </Animated.View>
    );
  }
}

ListFoods.propTypes = {
  style: PropTypes.object,
  showMenu: PropTypes.bool,
};

ListFoods.defaultProps = {
  style: {},
  showMenu: false,
};

export default ListFoods;
