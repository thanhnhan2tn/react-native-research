import React from 'react';
import { View } from 'react-native';

import assets from 'config/assets';
import Header from 'components/Header';
import Banner from './Banner';
import Main from './Main';
import styles from './styles';

export default class FeedBack extends React.Component {
  static navigationOptions = {
    header: ({ navigation }) => {
      const { defaultProps } = FeedBack;
      return (
        <Header
          onPressLeft={() => {
            navigation.dispatch({ type: 'home' });
          }}
          iconLeft={assets.backIcon}
          titleLeft={defaultProps.titleLeft}
          noTitle={true}
        />
      );
    },
  }

  constructor(props) {
    super(props);
    this.state = {
      info: {
        id: 1, img: assets.banner, title: 'FIT FOOD', adress: 'Adressas, Vlinlus', stars: { ratings: 3 },
      },
    };
  }

  render() {
    const { info } = this.state;
    return (
      <View style={styles.container}>
        <Banner info={info} />
        <Main />
      </View>
    );
  }
}

FeedBack.defaultProps = {
  titleLeft: 'Back',
};
