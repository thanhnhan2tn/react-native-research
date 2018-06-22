import React from 'react';
import {
  Animated,
  View,
  Text,
} from 'react-native';

import InfoRow from 'components/InfoRow';
import assets from 'config/assets';
import styles from './styles';

const restaurantInfo = {
  country: 'VietNam',
  address: 'HCM city',
  starRating: '5',
  openingHours: '7:00AM',
  phoneNumber: '32151005451',
};

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantInfo,
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 700,
      },
    ).start();
  }

  render() {
    const { fadeAnim } = this.state;
    const {
      country,
      address,
      starRating,
      openingHours,
      phoneNumber,
    } = this.state.restaurantInfo;

    return (
      <View>
        <Animated.View style={{
            flex: 1,
            opacity: fadeAnim,
          }}
        >
          <View style={{ flex: 4 }}>
            <Text>Banner</Text>
          </View>
          <View style={{ flex: 6 }}>
            <View style={styles.inforlist}>
              <InfoRow infoAttr="Country" infoVal={country} imgUrl={assets.home} />
              <InfoRow infoAttr="Address" infoVal={address} imgUrl={assets.home} />
              <InfoRow infoAttr="Rating" infoVal={starRating} imgUrl={assets.home} />
              <InfoRow infoAttr="Opening hours" infoVal={openingHours} imgUrl={assets.home} />
              <InfoRow infoAttr="Phone number" infoVal={phoneNumber} imgUrl={assets.home} />
            </View>
            <View style={styles.intro}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a
                type specimen book.
              </Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  }
}
