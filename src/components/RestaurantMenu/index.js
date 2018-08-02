import * as React from 'react';
import { View, Dimensions, Animated, ImageBackground } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import PropTypes from 'prop-types';
// img
import assets from 'config/assets';
// component
import Banner from './components/Banner';
import Menu from './components/Menu';
import FeedBack from './components/FeedBack';
import Information from './components/Information';
// styles
import styles from './styles';

export default class RestaurantMenu extends React.Component {
  static propTypes = {
    store: PropTypes.string,
    description: PropTypes.string,
  };

  static defaultProps = {
    store: '',
    description: '',
  };

  state = {
    index: 0, // eslint-disable-line
    routes: [ // eslint-disable-line
      { key: 'menu', title: 'Menu', index: 0 },
      { key: 'feedback', title: 'Feedback', index: 1 },
      { key: 'information', title: 'Information', index: 2 },
    ],
  };

  handleIndexChange = index => this.setState({ index }); // eslint-disable-line

  renderLabel = props => ({ route }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => (inputIndex === route.index ? 'white' : 'red'));

    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  renderTabBar = props =>
    (<TabBar
      {...props}
      style={styles.wrapTab}
      indicatorStyle={styles.active}
      renderLabel={this.renderLabel(props)}
      tabStyle={styles.tabItem}
    />);

  renderScene = SceneMap({
    menu: Menu,
    feedback: FeedBack,
    information: Information,
  });

  render() {
    const { store, description } = this.props;
    const { routes, index } = this.state;
    return (
      <ImageBackground
        source={assets.bannerDetail}
        resizeMode="cover"
        style={styles.wrapBackground}
      >
        <View style={styles.wrapOverlay}>
          <Banner
            style={styles.wrapBanner}
            store={store}
            description={description}
          />
          <View style={styles.wrapTabView}>
            <TabView
              navigationState={{ routes, index }}
              renderScene={this.renderScene}
              renderTabBar={this.renderTabBar}
              onIndexChange={this.handleIndexChange}
              initialLayout={{
                width: Dimensions.get('window').width,
                height: 0,
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
