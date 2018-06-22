import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import listFoods from 'data/homeListFoods.js';
import listMenuSearch from 'data/homeMenuSearch.js';
import ItemFood from './ItemFood/';
import ItemMenu from './ItemMenu/';
import styles from './styles';

class ListFoods extends React.Component {
  constructor() {
    super();
    const { width } = Dimensions.get('window');
    this.state = {
      leftBox: new Animated.Value(width),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.leftBox,
      {
        toValue: 0,
        delay: 100,
        duration: 300,
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
            left: this.state.leftBox,
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
