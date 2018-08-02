import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import assets from 'config/assets';
import styles from './styles';

export default class Popup extends Component {
  static propTypes = {
    title: PropTypes.string,
    img: PropTypes.number,
    imgCart: PropTypes.number,
    price: PropTypes.number,
    description: PropTypes.any,
    visible: PropTypes.bool,
    hideModal: PropTypes.func,
  };

  static defaultProps = {
    title: '',
    img: null,
    imgCart: null,
    price: 0,
    description: '',
    visible: false,
    hideModal: () => {},
  };

  state={
    number: 1,
  }

  hideModal = () => {
    const { hideModal, visible } = this.props;
    hideModal(!visible);
  }

  render() {
    const {
      price, title, img, description, imgCart, visible,
    } = this.props;
    const { number } = this.state;
    return (
      <View style={{ opacity: visible ? 1 : 0 }}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={visible}
          onRequestClose={() => {}}
        >
          <View style={styles.container}>
            <View style={styles.exitButton}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={this.hideModal}
              >
                <Image source={assets.exit} style={styles.imgSmall} />
              </TouchableHighlight>

            </View>
            <View style={styles.headerPopup} >
              <Text style={styles.textCenter}>{title}</Text>
            </View>
            <View style={styles.banner}>
              <Image source={img} style={styles.imgBanner} resizeMode="cover" />
            </View>
            <View style={styles.description}>
              <Text style={styles.textDes}>{description}</Text>
            </View>
            <View style={styles.footerPopup}>
              <View style={styles.control}>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => this.setState({ number: number - 1 })}
                  style={styles.btn}
                >
                  <Text style={styles.textRed}>-</Text>
                </TouchableHighlight>
                <Text>{number}</Text>
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => this.setState({ number: number + 1 })}
                  style={styles.btn}
                >
                  <Text style={styles.textRed}>+</Text>
                </TouchableHighlight>

              </View>
              <View style={styles.cart}>
                <Text style={[styles.textRed, styles.textPadding]}>{price}</Text>
                <Image source={imgCart} style={styles.imgSmall} />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
