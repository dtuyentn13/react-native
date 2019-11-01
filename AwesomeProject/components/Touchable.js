import React, { Component } from 'react'
import {
    Alert, AppRegistry, StyleSheet, View, Image, Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Button from 'react-native-button'

export default class Touchable extends Component {

    _onPressButton = () => {
        alert("You Pressed the button")
    }
    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'tomato'
        }}>
            <TouchableHighlight
                onPress={this._onPressButton}
                underlayColor="red"
                onShowUnderlay={() => {
                    alert("onshowUnderlay button !");
                }}
            >
                <View style={{ backgroundColor: 'green' }}>

                    <Text style={{
                        color: 'white',
                        padding: 20,
                        fontSize: 18,
                        textAlign: 'center'
                    }}>
                        TouchableHighlight
                  </Text>
                </View>
            </TouchableHighlight>
            <TouchableNativeFeedback
                onPress={this._onPressButton}
                useForeground={false}
            >
                <View style={{
                    width: 300,
                    height: 50,
                    margin: 20,
                    backgroundColor: 'blue',

                }}>
                    <Text style={{
                        margin: 10,
                        fontSize: 20,
                        color: 'white',
                        textAlign: 'center'

                    }}>
                        TouchableNativeFeedback
                </Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableOpacity
                onPress={this._onPressButton}
                activeOpacity={0.7}>
                <View style={{
                    backgroundColor: 'tomato',
                    width: 300,
                    height: 50,
                    margin: 20,

                }}>
                    <Text style={{
                        color: 'white',
                        margin: 10,
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        TouchableOpacity
                  </Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback
                onPress={this._onPressButton}
                onLongPress={() => {
                    alert("onLongPress")
                }}
                // onPressIn={() => {
                //     alert("onPressIn")

                // }}
                // onPressOut={() => {
                //     alert("onPressOut")
                // }}
                >
                <View style={{
                    backgroundColor: 'purple',
                    width: 300,
                    height: 50,
                    margin: 20,

                }}>
                    <Text style={{
                        color: 'white',
                        margin: 10,
                        fontSize: 20,
                        textAlign: 'center'
                    }}>
                        TouchableWithoutFeedback
                  </Text>
                </View>
            </TouchableWithoutFeedback>
        </View>);
    }
}