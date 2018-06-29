import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

const Icon = (props) => {
  const { onPress, source } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        resizeMode="contain"
        source={source}
        style={styles.customIcon}
      />
    </TouchableOpacity>
  );
};

Icon.propTypes = {
  onPress: PropTypes.func,
  source: PropTypes.any,
};

Icon.defaultProps = {
  onPress: () => {},
  source: '',
};

export default Icon;
