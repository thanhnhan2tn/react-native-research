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
      <Image style={styles.inforIcon} source={{ uri: props.uri }} />
      <Text style={styles.inforAttr}>{props.infoAttr}</Text>
    </View>
    <Text style={styles.inforValue}>{props.infoVal}</Text>
  </View>
);

InfoRow.propTypes = {
  uri: PropTypes.string,
  infoAttr: PropTypes.string,
  infoVal: PropTypes.string,
};

InfoRow.defaultProps = {
  uri: '',
  infoAttr: '',
  infoVal: '',
};

export default InfoRow;
