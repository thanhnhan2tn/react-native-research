import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

const ModalHeader = (props) => {
  const { onPress, modalTitle } = props;

  return (
    <View style={styles.modalHeader}>
      <View style={styles.emptyView} />
      <Text style={styles.modalTitle}>{modalTitle}</Text>
      <View style={styles.wrapperIcon}>
        <TouchableHighlight onPress={onPress}>
          <Image resizeMode="contain" source={assets.close} style={styles.closeIcon} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

ModalHeader.propTypes = {
  onPress: PropTypes.func,
  modalTitle: PropTypes.string,
};

ModalHeader.defaultProps = {
  onPress: () => {},
  modalTitle: 'Shopping Cart',
};

export default ModalHeader;
