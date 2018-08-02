import * as React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
// data
import data from 'data/listAvailable';
// asset
import assets from 'config/assets';
// component
import Header from 'components/Header';
import ListItem from './components/ListItem';
// styles
import styles from './styles';

export default class SearchLocation extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header isSearch={true} onBack={() => navigation.goBack(null)} />,
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: {},
  };

  state = {
    text: '',
  }

  handleClick = () => {
    this.props.navigation.navigate('main', {
      location: this.state.text,
    });
  }

  render() {
    // const { navigation } = this.props;
    // const location = navigation.getParam('location', '');
    return (
      <View style={styles.wrapSearch}>
        <ImageBackground
          source={assets.banner}
          style={styles.backGround}
        >
          <TextInput
            style={styles.wrapInput}
            autoFocus={true}
            placeholder="Your address"
            underlineColorAndroid="transparent"
            onChangeText={text => this.setState({ text })}
          />
        </ImageBackground>

        <View style={styles.wrapList}>
          <ListItem
            dataSource={data}
          />
          <TouchableHighlight
            onPress={this.handleClick}
            style={styles.item}
          >
            <Text>Low Green str.21-45, London</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.handleClick}
            style={styles.item}
          >
            <Text>Manhattan str. 204-10 London</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
