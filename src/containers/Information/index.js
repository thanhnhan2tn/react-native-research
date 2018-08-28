import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './style';
import Header from '../../components/Header';
import assets from '../../config/assets';

class Information extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Information</Text>
      </View>
    )
  };
}

mapStateToProps = state => ({

});
export default connect(mapStateToProps)(Information);
