import React from 'react';
import { View, Text } from 'react-native';
// data
import data from 'data/listMenu';
import data1 from 'data/listMenu1';
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
    price: dataItem.price,
    title: '',
    img: assets.item,
    description: '',
    id: '',
  };

  setModalVisible = () => {
    this.setState({
      modalVisible: true,
      price: dataItem.price,
      title: dataItem.title,
      img: dataItem.img,
      description: dataItem.description,
      id: dataItem.id,
    });
  }

  setModelDisplay = (notVisible) => {
    this.setState({ modalVisible: notVisible });
  }

  render() {
    const {
      price, title, img, description, modalVisible, id,
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
          <Text style={styles.title}>{data1.title}</Text>
          <ListItem
            dataSource={data1.list}
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
          priceReal={price}
          title={title}
          img={img}
          description={description}
          id={id}
        />
      </View>
    );
  }
}
