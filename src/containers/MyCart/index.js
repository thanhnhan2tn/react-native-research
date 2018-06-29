import React, { Component } from 'react';
import { View, Modal } from 'react-native';

import PropTypes from 'prop-types';
import ModalHeader from 'components/ModalHeader';
import ModalBody from 'components/ModalBody';
import ModalFooter from 'components/ModalFooter';
import styles from './styles';

export default class MyCart extends Component {
  handlePressClose = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
      >
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <ModalHeader onPress={this.handlePressClose} />
            <ModalBody />
            <ModalFooter />
          </View>
        </View>
      </Modal>
    );
  }
}

MyCart.propTypes = {
  navigation: PropTypes.object,
};

MyCart.defaultProps = {
  navigation: {},
};
