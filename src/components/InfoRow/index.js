import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
} from 'react-native';
import styles from './styles';

const InfoRow = props => (
  <View style={styles.row}>
    <View style={styles.inforDetail}>
      {
        props.uri ? <Image style={styles.inforIcon} source={props.imgUrl} /> : ''
      }
      <Text style={styles.inforAttr}>{props.infoAttr ? props.infoAttr : ''}</Text>
    </View>
    <Text style={styles.inforValue}>{props.infoVal ? props.infoVal : ''}</Text>
  </View>
);

InfoRow.propTypes = {
  imgUrl: PropTypes.string,
  infoAttr: PropTypes.string,
  infoVal: PropTypes.string,
};

InfoRow.defaultProps = {
  uri: '',
  imgUrl: '',
  infoAttr: '',
  infoVal: '',
};

export default InfoRow;
