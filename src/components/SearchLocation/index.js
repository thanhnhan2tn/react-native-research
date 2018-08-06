import * as React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableHighlight, FlatList } from 'react-native';
import PropTypes from 'prop-types';
// data
import data from 'data/listAvailable';
import dataSource from 'data/listAddress';
// asset
import assets from 'config/assets';
// component
import Header from 'components/Header';
import ListItem from './components/ListItem';
// styles
import styles from './styles';

export default class SearchLocation extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => <Header isSearch={true} isBack={false} onCancel={() => navigation.goBack(null)} />,
  };

  static propTypes = {
    navigation: PropTypes.any,
  };

  static defaultProps = {
    navigation: null,
  };

  state = {
    text: '',
  }

  handleClick = (location, address) => {
    const { navigation } = this.props;
    navigation.navigate('main', {
      location,
      address,
    });
  }

  render() {
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
            value={this.state.text}
          />
        </ImageBackground>

        <View style={styles.wrapList}>
          <ListItem
            dataSource={data}
          />
          <FlatList
            data={dataSource}
            keyExtractor={item => item.key}
            renderItem={({ item }) =>
              (
                <TouchableHighlight
                  underlayColor="transparent"
                  onPress={() => this.handleClick(item.location, item.address)}
                  style={styles.item}
                  // key={item.key}
                >
                  <Text style={styles.textAddress}>{item.address}, {item.location}</Text>
                </TouchableHighlight>
              )
            }
          />
        </View>
      </View>
    );
  }
}
