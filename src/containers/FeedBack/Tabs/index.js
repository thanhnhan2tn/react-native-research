import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Button from '../Button';
import styles from './styles';

export default class Tabs extends React.Component {
  constructor(props) {
    super(props);
    const { arrTabs } = this.props;
    this.state = {
      arrTabs,
    };
  }

  render() {
    const { arrTabs } = this.state;
    return (
      <View style={styles.container}>
        { arrTabs.map(tab =>
          (<Button
            key={tab.id}
            title={tab.title}
            active={tab.active ? styles.active : ''}
            color={tab.active ? styles.color : ''}
          />))
        }
      </View>
    );
  }
}

Tabs.propTypes = {
  arrTabs: PropTypes.array,
};

Tabs.defaultProps = {
  arrTabs: [],
};
