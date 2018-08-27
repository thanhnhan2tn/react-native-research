import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { TabView } from 'react-native-tab-view';
import RestaurantInfo from 'containers/RestaurantInfo';
import FeedBack from 'containers/FeedBack';
import RestaurantMenu from 'containers/RestaurantMenu';

import colors from 'styles/colors';
import styles from './styles';

// const MenuTab = () => (
//   <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
// );

/* eslint react/no-unused-state: "off" */
export default class RNTabView extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'menu', title: 'Menu' },
      { key: 'feedback', title: 'Feedback' },
      { key: 'info', title: 'Infomation' },
    ],
  };

  handleIndexChange = index => this.setState({ index });

  renderTabBar = (props) => {
    const { navigationState: { routes } } = props;
    const inputRange = routes.map((x, i) => i);

    return (
      <View style={styles.tabBarWrapper}>
        <View style={styles.tabBar}>
          {routes.map((route, i) => {
            const backgroundColor = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(inputIndex => (inputIndex === i ? colors.red1 : 'transparent')),
            });
            const textColor = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(inputIndex => (inputIndex === i ? colors.white : colors.red1)),
            });
            const borderFirstEle = i === 0 ? { borderTopLeftRadius: 8, borderBottomLeftRadius: 8 } : {};
            const borderLastEle = i === (routes.length - 1) ? { borderTopRightRadius: 8, borderBottomRightRadius: 8 } : {};
            return (
              <Animated.View
                key={route.key}
                style={[styles.tab, { backgroundColor }, borderFirstEle, borderLastEle]}
              >
                <TouchableOpacity
                  style={styles.tabItem}
                  onPress={() => this.setState({ index: i })}
                >
                  <Animated.Text style={{ color: textColor }}>{route.title}</Animated.Text>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </View>
    );
  }

  renderScene = ({ route }) => {
    switch (route.key) {
      case 'menu':
        return <RestaurantMenu restaurant={this.props.restaurant} />;
      case 'feedback':
        return <FeedBack restaurant={this.props.restaurant} />;
      case 'info':
        return <RestaurantInfo />;
      default:
        return null;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: 500,
          }}
        />
      </View>
    );
  }
}

RNTabView.propTypes = {
  navigationState: PropTypes.object,
};

RNTabView.defaultProps = {
  navigationState: {},
};
