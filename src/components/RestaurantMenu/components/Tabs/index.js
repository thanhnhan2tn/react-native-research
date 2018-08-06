import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default class Tabs extends Component {
  state = {
    activeTab: 0,
  }

  render({ children } = this.props) {
    return (
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          {children.map(({ props: { title } }, index) =>
            (
              <TouchableOpacity
                style={[
                  styles.tabContainer,
                  index === this.state.activeTab ? styles.tabActive : [],
                ]}
                onPress={() => this.setState({ activeTab: index })}
              >
                <Text
                  style={[
                    styles.tabText,
                    index === this.state.activeTab ? styles.textActive : [],
                  ]}
                >
                  {title}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View style={styles.contentContainer}>
          {children[this.state.activeTab]}
        </View>
      </View>
    );
  }
}
