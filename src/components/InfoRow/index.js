import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
} from 'react-native';
import styles from './styles';

const InfoRow = (props) => {
  const {
    uri,
    infoAttr,
    infoVal,
  } = props;

  return (
    <View style={styles.row}>
      <View style={styles.inforDetail}>
        {
          uri ? <Image style={styles.inforIcon} source={uri} /> : ''
        }
        <Text style={styles.inforAttr}>{infoAttr}</Text>
      </View>
      <Text style={styles.inforValue}>{infoVal}</Text>
    </View>
  );
};

InfoRow.propTypes = {
  infoAttr: PropTypes.string,
  infoVal: PropTypes.string,
  uri: PropTypes.string,
};

InfoRow.defaultProps = {
  uri: '',
  infoAttr: '',
  infoVal: '',
};

export default InfoRow;
