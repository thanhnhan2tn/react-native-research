import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Item from '../Item';
import styles from './styles';

export default class Main extends React.PureComponent {
  genList = list => list.map(item => <Item key={item.key} item={item} />)
  render() {
    const { list } = this.props.listMainScreen;
    return (
      <View style={styles.container}>
        {this.genList(list)}
      </View>
    );
  }
}

Main.propTypes = {
  listMainScreen: PropTypes.object,
  list: PropTypes.array,
};

Main.defaultProps = {
  listMainScreen: {},
  list: [],
};
