import React, { Component } from 'react';
import {
    AppRegistry,
    Flatlist, StyleSheet,
    Text, View, Image,
    Alert, Platform,
    TocuhableHighlight,
    Dimensions, TextInput
} from 'react-native';
import Button from 'react-native-button';
import Modal from 'react-native-modalbox';
import flatlistData from '../Data/flatListData'
import flatListData from '../Data/flatListData';
import { updateAProFile } from '../networking/Server';


var screen = Dimensions.get('window');
export default class EditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            address: '',
            phone: '',
            email: ''
        };
    }

    showEditModal = (editingFill, flatlistItem) => {
        // console.log(`editingFill = ${JSON.stringify(editingFill)}`);
        this.setState({
            // key: editingFill.key,
            id: editingFill.id,
            name: editingFill.name,
            age: editingFill.age,
            address: editingFill.address,
            phone: editingFill.phone,
            email: editingFill.email,
            flatlistItem: flatlistItem
        });
        this.refs.myModal.open();
    }
    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters });
    }
    render() {
        return (
            <Modal
                ref={"myModal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10,
                    width: screen.width - 80,
                    height: 480
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal Closed");
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>
                    New food's infomations
                </Text>
                <TextInput style={styles.textEditingStyle}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Editing your name"
                    value={this.state.name}
                />
                <TextInput style={styles.textEditingStyle}
                    keyboardType='numeric'
                    onChangeText={(number) => this.setState({ age: number })}
                    placeholder="Editing your age"
                    value={this.state.Age}
                />
                <TextInput style={styles.textEditingStyle}
                    onChangeText={(text) => this.setState({ address: text })}
                    placeholder="Editing your address"
                    value={this.state.address}
                />

                <TextInput style={styles.textEditingStyle}
                    keyboardType="number-pad"
                    onChangeText={(number) => this.setState({ phone: number })}
                    placeholder="Editing your phone number"
                    value={this.state.phone}
                />
                <TextInput style={styles.textEditingStyle}
                    keyboardType='email-address'
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="Editing your email"
                    value={this.state.email}
                />

                <Button style={{
                    fontSize: 18,
                    color: 'white'
                }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (!this.state.name || !this.state.address) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        //Update existing Food
                        // var foundIndex = flatListData.findIndex(item => this.state.key == item.key);
                        // if (foundIndex <0) {
                        //     return; //not found
                        // }
                        // flatListData[foundIndex].name = this.state.name;
                        // flatListData[foundIndex].address = this.state.address;
                        debugger;
                        let params = {
                            name: this.state.name,
                            age: this.state.age,
                            address: this.state.address,
                            phone: this.state.phone,
                            email: this.state.email
                        };
                        let idUpdate= this.state.id
                        updateAProFile(idUpdate, params).then(() => {
                            if (result === 'ok') {
                                this.state.flatlistItem.refreshFlatListItem({
                                    id: this.state.id,
                                    name: this.state.name,
                                    address: this.state.address,
                                    age: this.state.age,
                                    email: this.state.email,
                                    phone: this.state.phone,
                                });
                                this.refs.myModal.close();
                            }
                        }).catch((error) => {
                            console.log(`error = ${error}`);
                            this.refs.myModal.close();
                        })
                        //refresh flatlist item
                        // this.state.flatlistItem.refreshFlatListItem();
                        // this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>

            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    textEditingStyle: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    }
});
