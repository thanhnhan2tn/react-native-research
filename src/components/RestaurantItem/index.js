import React from 'react';
import { View, Image, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { Rating } from 'react-native-elements';
import { VerticalLine } from '../line';
import styles from './style';

const RestaurantItem = props => (
  <View style={styles.container} >
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: props.dataItem.thumb }}
        style={styles.image}
      />
    </View>
    <View style={styles.contentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{props.dataItem.name}</Text>
        <View style={styles.ratingBar}>
          <Rating
            type="star"
            readonly={true}
            imageSize={12}
            style={{ marginRight: 10 }}
            startingValue={parseFloat(props.dataItem.ratting)}
          />
          <Text>({props.dataItem.feedback.length})</Text>
        </View>
      </View>
      <Text style={styles.label}>{props.dataItem.location.city}</Text>
      <View style={styles.otherInformation}>
        <View style={styles.otherInformationItem}>
          <Icon name="map-marker-alt" size={15} style={{ marginRight: 5 }} />
          <Text style={styles.otherInformationText}>${props.dataItem.sale}</Text>
        </View>
        <VerticalLine />
        <View style={styles.otherInformationItem}>
          <Icon name="clock" size={15} style={{ marginRight: 5 }} />
          <Text style={styles.otherInformationText}>1h</Text>
        </View>
        <VerticalLine />
        <View style={styles.otherInformationItem}>
          <Icon name="shopping-cart" size={15} style={{ marginRight: 5 }} />
          <Text style={styles.otherInformationText}>Min $25</Text>
        </View>
      </View>
    </View>

  </View>
);
RestaurantItem.propTypes = {
  dataItem: PropTypes.object,
};
RestaurantItem.defaultProps = {
  dataItem: {},
};

export default RestaurantItem;
