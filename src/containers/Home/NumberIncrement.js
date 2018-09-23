import React, { Component } from 'react';
import { Text } from 'react-native';

import StyledButton from  'components/StyledButton';

export default ({ incrementCounter, number }) => (
  <React.Fragment>
    <StyledButton onPress={incrementCounter} text='Increase number' />
    <Text>{number}</Text>
  </React.Fragment>
);