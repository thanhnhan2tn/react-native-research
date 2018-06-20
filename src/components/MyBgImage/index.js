import React from 'react';
import {
  Image,
  StyleSheet,
} from 'react-native';

class MyBgImage extends React.Component {
  render() {
    const resizeMode = this.props.resizeMode ? this.props.resizeMode : 'center';
    return(
      <Image
        style={{
          flex: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          resizeMode,
        }}
        source={this.props.source}
      />
    );
  }
}

export default MyBgImage;
