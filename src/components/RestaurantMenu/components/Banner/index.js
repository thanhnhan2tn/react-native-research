import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

export default class Banner extends PureComponent {
  static propTypes = {
    store: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    store: '',
    description: '',
  };
  render() {
    const { store, description } = this.props;
    return (
      <View style={styles.wrapBanner}>
        <Text style={[styles.white, styles.textBig]}>{`${store}`.toUpperCase()}</Text>
        <Text style={styles.white}>{description}</Text>
      </View>
    );
  }
}
