import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import PropTypes from 'prop-types';
import styles from './styles';

const ModalFooter = (props) => {
  const { totalText, amount, checkoutText } = props;

  return (
    <View style={styles.container}>
      <View style={styles.amountWrapper}>
        <Text style={styles.totalText}>{totalText}</Text>
        <Text style={styles.amountText}>{amount}</Text>
      </View>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.btnCheckout}>
          <Text style={styles.checkoutText}>{checkoutText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

ModalFooter.propTypes = {
  totalText: PropTypes.string,
  amount: PropTypes.number,
  checkoutText: PropTypes.string,
};

ModalFooter.defaultProps = {
  totalText: 'Total',
  amount: 12000,
  checkoutText: 'Checkout',
};

export default ModalFooter;
