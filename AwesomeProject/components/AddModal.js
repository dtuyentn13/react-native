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
import { insertNewProfileToServer } from '../networking/Server';

var screen = Dimensions.get('window');
export default class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            age: '',
            phone: '',
            email: '',
        };
        // name, age, address, email, phone
    }
    showAddModal = () => {
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
                    marginTop: 20
                }}>
                    Đăng Ký Tài Khoản
                </Text>
                <TextInput style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({ name: text })}
                    placeholder="Enter your name"
                    value={this.state.name}
                />
                <TextInput style={styles.textInputStyle}
                    keyboardType='numeric'
                    onChangeText={(number) => this.setState({ age: number })}
                    placeholder="Enter your age"
                    value={this.state.Age}
                />
                <TextInput style={styles.textInputStyle}
                    onChangeText={(text) => this.setState({ address: text })}
                    placeholder="Enter your address"
                    value={this.state.address}
                />

                <TextInput style={styles.textInputStyle}
                    keyboardType="number-pad"
                    onChangeText={(number) => this.setState({ phone: number })}
                    placeholder="Enter your phone number"
                    value={this.state.phone}
                />
                <TextInput style={styles.textInputStyle}
                    keyboardType='email-address'
                    onChangeText={(text) => this.setState({ email: text })}
                    placeholder="Enter your email"
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

                        /* TODO: kiem tra bao loi 5 field, moi state 1 if */
                        if (this.state.name.length == 0) {
                            alert("You must enter your name");
                            return;
                        }
                        if (this.state.age.length == 0) {
                            alert("You must enter your age");
                            return;
                        }
                        if (this.state.address.length == 0) {
                            alert("You must enter your address");
                            return;
                        }
                        if (this.state.phone.length == 0) {
                            alert("You must enter your phone number");
                            return;
                        }
                        if (this.state.email.length == 0) {
                            alert("You must enter your email");
                            return;
                        }

                        const NewProfile = {
                            avatar: "https://i.pravatar.cc/300",
                            name: this.state.name,
                            phone: this.state.phone,
                            email: this.state.email,
                            //imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/42/Cream_tea_Brighton.jpg",
                            address: this.state.address,
                            age: this.state.age
                        };
                        // flatlistData.push(NewProfile);                       
                        // this.props.parentFlatList.refreshFlatList(newKey);
                        insertNewProfileToServer(NewProfile).then((result) => {
                            if (result === 'ok') {
                                this.props.parentFlatList.refreshDataFromServer();
                            }
                        });
                        this.refs.myModal.close();
                    }}
                >
                    Save
                </Button>

            </Modal>
        );
    }
}
const styles = StyleSheet.create({
    textInputStyle: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
        marginBottom: 10,
        borderBottomWidth: 1
    }
});
