import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#f44242',
  }
});

import CustomButton from 'components/CustomButton';
export default class Details extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <CustomButton
          styles={styles.btn}
          onPress={() => this.props.navigation.push('Details')}
        >
          <Text>Go to Details... again</Text>
        </CustomButton>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}