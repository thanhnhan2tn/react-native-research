import { View, Modal, Text, TouchableOpacity, Picker } from 'react-native';
import React, { Component } from 'react';
import styles from './style'
export default class PickerIOS extends Component {
    state = {
        modalVisible: false
    }
    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }
    render() {
        return (
            <View style={styles.container}>
                <Modal
                    animationType={"slide"} transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { }}>
                    <Picker
                        // style={styles.picker}
                        selectedValue={this.state.city}
                        onValueChange={(itemValue, itemIndex) => this.setState({ city: itemValue })}>
                        <Picker.Item label={this.props.pickerData[0].label} value={this.props.pickerData[0].value} />
                        <Picker.Item label={this.props.pickerData[1].label} value={this.props.pickerData[1].value} />
                    </Picker>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => { this.toggleModal(false) }}>
                        <Text style = {styles.buttonText}>Close</Text>
                    </TouchableOpacity>
                </Modal>
            </View >
        )
    };
}