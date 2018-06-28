import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

function MyBgImage(props) {
  return (
    <Image
      style={{
        flex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        resizeMode: props.resizeMode,
      }}
      source={props.source}
    />
  );
}

MyBgImage.propTypes = {
  resizeMode: PropTypes.string,
  source: PropTypes.any,
};


MyBgImage.defaultProps = {
  resizeMode: 'center',
  source: '',
};

export default MyBgImage;
