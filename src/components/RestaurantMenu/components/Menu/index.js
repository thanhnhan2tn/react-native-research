import React from 'react';
import { View, Text } from 'react-native';
// data
import data from 'data/listMenu';
import dataItem from 'data/popupItem';
import assets from 'config/assets';
// component
import Footer from 'containers/MainScreen/components/Footer';
import ListItem from './components/ListItem';
import Popup from './components/Popup';
import styles from './styles';

export default class Menu extends React.Component {
  state = {
    modalVisible: false,
    price: 0,
    title: '',
    img: assets.item,
    description: '',
  };
  setModalVisible = () => {
    this.setState({
      modalVisible: true,
      price: dataItem.price,
      title: dataItem.title,
      img: dataItem.img,
      description: dataItem.description,
    });
  }
  setModelDisplay = (notVisible) => {
    this.setState({ modalVisible: notVisible });
  }
  render() {
    const {
      price, title, img, description, modalVisible, imgCart,
    } = this.state;
    return (
      <View style={styles.wrapMenu}>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <ListItem
            dataSource={data.list}
            handleClickItem={this.setModalVisible}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>{data.title}</Text>
          <ListItem
            dataSource={data.list}
            handleClickItem={this.setModalVisible}
          />
        </View>
        <Footer
          icon={assets.category}
          title="category"
          info="All"
        />
        <Popup
          visible={modalVisible}
          hideModal={this.setModelDisplay}
          price={price}
          title={title}
          img={img}
          description={description}
          imgCart={imgCart}
        />
      </View>
    );
  }
}
