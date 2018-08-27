import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import Item from '../Item';
import styles from './styles';

const Main = (props) => {
  const { restaurants, onPress } = props;

  return (
    <View styles={styles.container}>
      {
        restaurants.map(res => (
          <Item
            key={res._id}
            item={res}
            onPress={() => onPress(res)}
          />
        ))
      }
    </View>
  )
}

Main.propTypes = {
  restaurants: PropTypes.any,
};

Main.defaultProps = {
  list: [],
};

export default Main;
