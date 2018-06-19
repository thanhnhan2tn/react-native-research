import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import assets from 'config/assets';
import styles from './styles';

class CustomHeader extends React.Component {

  onPressLeft = () => {
    const { onPressLeft } = this.props;

    if (typeof onPressLeft === 'function') {
      onPressLeft();
    } else {
      Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
          {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      );
    }
  }

  onPressRight = () => {
    const { iconLeft, onPressLeft } = this.props;

    if (typeof onPressRight === 'function') {
      onPressRight();
    }
  }

  render() {
    const {
      noTitle,
      iconLeft,
      iconRight,
      titleLeft,
      titleRight,
    } = this.props;
    return (
      <View style={styles.wrapper}>
        <TouchableOpacity
          onPress={this.onPressLeft}
          style={styles.btnLeft}
        >
          <Image style={styles.menu} source={iconLeft || assets.menu} />
          {
            titleLeft ? <Text>{titleLeft}</Text> : null
          }
        </TouchableOpacity>
        {
          !noTitle ? <Text style={styles.title}>FoodApp</Text> : null
        }
        <TouchableOpacity>
          <Image style={styles.cartIcon} source={iconRight || assets.shoppingCart} />
          {
            titleRight ? <Text>{titleRight}</Text> : null
          }
        </TouchableOpacity>
      </View>
    );
  }
}

export default CustomHeader;
