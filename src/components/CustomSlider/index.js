import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { IndicatorViewPager, PagerDotIndicator } from 'rn-viewpager';
import styles from './style';
import assets from '../../config/assets';

export default class CustomSlider extends Component {
  state = {
    data: [
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
      { source: assets.foodImage },
    ],

  }
  _renderDotIndicator(pageNumber) {
    return (<PagerDotIndicator
      pageCount={pageNumber}
      selectedDotStyle={styles.selectedDot}
      dotStyle={styles.dotStyle}
      hideSingle={false}
    />);
  }

  render() {
    const data = this.props.data;
    const itemPerPage = this.props.itemPerPage;
    let pages = [];
    while (data.length) {
      pages.push(data.splice(0, itemPerPage))
    }
    const pageNumber = pages.length
    return (
      <View style={styles.container}>
        <IndicatorViewPager
          style={{
            height: 400,
            margin: 10,
          }}
          indicator={this._renderDotIndicator(pageNumber)}
        >
          {
            pages.map((page, indexPage) => (
              <View style={styles.pageContainer} key={indexPage.toString()}>
                {
                  page.map((item, index) => (
                    <Image
                      key={index.toString()}
                      style={styles.image}
                      source={item.source}
                    />
                  ))
                }

              </View>
            ))
          }

        </IndicatorViewPager>
      </View>
    )
  };
}