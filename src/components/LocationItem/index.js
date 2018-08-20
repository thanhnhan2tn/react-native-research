import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import styles from './style';
import { LOCATION_TYPE } from '../../utils/constants'
import colors from '../../styles/colors';
export default class LocationItem extends Component {
  render() {
    const { type, address } = this.props
    var Image = null
    var textType = null
    var textAddress = null
    if (type === LOCATION_TYPE.MY_LOCATION) {
      Image = (<Icon name="location-on" size={30} color={colors.red} style={styles.icon} />)
      textType = <Text style={styles.textType}>My Location</Text>
    }
    else if (type === LOCATION_TYPE.HOME_LOCATION) {
      Image = (<Icon name="home" size={30} color={colors.red} style={styles.icon} />)
      textType = <Text style={styles.textType}>Home</Text>
      textAddress = <Text style={styles.textAddressGray}>({address})</Text>
    }
    else if (type === LOCATION_TYPE.WORK_LOCATION) {
      Image = (<Icon name="work" size={30} color={colors.red} style={styles.icon} />)
      textType = <Text style={styles.textType}>Work</Text>
      textAddress = <Text style={styles.textAddressGray}>({address})</Text>
    } else if (type === LOCATION_TYPE.SEARCH_LOCATION) {
      textAddress = <Text style={styles.textAddressBlack}>{address}</Text>
    }

    return (
      <View style={styles.container}>
        {Image}
        {textType}
        {textAddress}
      </View>
    )
  };
}