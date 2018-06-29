import React from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import PropTypes from 'prop-types';

import ListItem from 'components/ListItem';
import styles from './styles';

const ModalBody = (props) => {
  const { orderList } = props;

  return (
    <View style={styles.container}>
      <FlatList
        data={orderList}
        renderItem={({ item }) =>
          (
            <ListItem
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          )
        }
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

ModalBody.propTypes = {
  orderList: PropTypes.array,
};

ModalBody.defaultProps = {
  orderList: [
    {
      id: 1,
      name: 'Food A',
      quantity: 2,
      price: 100,
    },
    {
      id: 2,
      name: 'Food A',
      quantity: 2,
      price: 100,
    },
    {
      id: 3,
      name: 'Food A',
      quantity: 2,
      price: 100,
    },
    // {
    //   id: 4,
    //   name: 'Food A',
    //   quantity: 2,
    //   price: 100,
    // },
    // {
    //   id: 5,
    //   name: 'Food A',
    //   quantity: 2,
    //   price: 100,
    // },
    // {
    //   id: 6,
    //   name: 'Food A',
    //   quantity: 2,
    //   price: 100,
    // },
    // {
    //   id: 7,
    //   name: 'Food A',
    //   quantity: 2,
    //   price: 100,
    // },
  ],
};

export default ModalBody;
