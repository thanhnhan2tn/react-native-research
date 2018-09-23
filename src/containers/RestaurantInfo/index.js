import React from 'react';
import {
  Animated,
  View,
  Text,
} from 'react-native';

import PropTypes from 'prop-types';
import InfoRow from 'components/InfoRow';
import assets from 'config/assets';
import styles from './styles';

export default class RestaurantInfo extends React.PureComponent {
  render() {
    const {
      country,
      address,
      starRating,
      openingHours,
      phoneNumber,
    } = this.props.restaurantInfo;

    return (
      <Animated.View style={{ flex: 1 }}>
        <View style={{ flex: 6 }}>
          <View style={styles.inforlist}>
            <InfoRow infoAttr="Country" infoVal={country} uri={assets.home} />
            <InfoRow infoAttr="Address" infoVal={address} uri={assets.home} />
            <InfoRow infoAttr="Rating" infoVal={starRating} uri={assets.home} />
            <InfoRow infoAttr="Opening hours" infoVal={openingHours} uri={assets.home} />
            <InfoRow infoAttr="Phone number" infoVal={phoneNumber} uri={assets.home} />
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
    );
  }
}

RestaurantInfo.propTypes = {
  restaurantInfo: PropTypes.object,
};

RestaurantInfo.defaultProps = {
  restaurantInfo: {
    country: 'VietNam',
    address: 'HCM city',
    starRating: '5',
    openingHours: '7:00AM',
    phoneNumber: '32151005451',
  },
};
