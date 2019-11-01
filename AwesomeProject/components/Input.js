import React, { Component } from 'react'
import { Text, View, TextInput, AppRegistry, Keyboard } from 'react-native'
// import App from '../App';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedPassWord: '',
            typedDescription: ''
        }
    }
    componentWillMount () {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(() =>{
                return {typedText: 'Keyboard is show'}
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(() => {
                return {typedText: 'Keyboard Hide'}
            });
        });
    }
    componentWillUnmount () {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    render() {
        return (
            <View>
                <TextInput
                    style={{
                        height: 40,
                        margin: 20,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}
                    keyboardType='email-address'
                    placeholder='Enter Your Email'
                    placeholderTextColor='tomato'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedText: text
                                    }
                                }
                            );
                        }
                    }
                />
                <Text style={{ marginLeft: 20, }}>{this.state.typedText}</Text>
                <TextInput
                    style={{
                        height: 40,
                        margin: 20,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                    }}

                    keyboardType='default'
                    placeholder='Enter Your PassWord'
                    placeholderTextColor='tomato'
                    secureTextEntry={true}
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previousState) => {
                                    return {
                                        typedPassWord: text
                                    }
                                }
                            );
                        }
                    }
                />
                <TextInput
                    style={{
                        height: 100,
                        margin: 20,
                        borderColor: '',
                        borderWidth: 1,
                        padding: 10,
                    }}
                    // multiline={true}
                    borderLeftColor='green'
                    borderLeftWidth={3}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderRightColor='green'
                    borderRightWidth={3}
                    editable={true}
                    autoFocus={true}
                    returnKeyType="done"
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={(text) => {
                        this.setState(() => {
                            return {
                                typedDescription: text
                            };
                        })
                    }}
                />
            </View>
        )
    }
}
AppRegistry.registerComponent('tutorialproject', () => App);