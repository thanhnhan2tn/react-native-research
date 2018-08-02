import React, { PureComponent } from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Item from './components/Item';

export default class ListFood extends PureComponent {
  static propTypes = {
    handleClickItem: PropTypes.any,
    dataSource: PropTypes.array,
  };

  static defaultProps = {
    handleClickItem: null,
    dataSource: [],
  };

  render() {
    const { dataSource, handleClickItem } = this.props;
    return (
      <View style={styles.wrapList}>
        <Text style={styles.title}>We recommend</Text>
        <View style={styles.listRecommend}>
          <ScrollView horizontal={true}>
            <FlatList
              data={dataSource}
              numColumns={dataSource.length}
              keyExtractor={item => item.id}
              renderItem={({ item }) =>
                (<Item
                  id={item.id}
                  store={item.store}
                  storeName={item.store}
                  handleClick={handleClickItem}
                  img={item.img}
                />)
              }
            />
          </ScrollView>
        </View>
      </View>
    );
  }
}
