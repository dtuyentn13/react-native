import React, { Component } from 'react';
import { Text, View, Alert, AppRegistry, StyleSheet } from 'react-native';
import Button from 'react-native-button';

export default class Button1 extends Component {
    // _onPressButton = () => {
    //     Alert.alert("You pressed button!");
    // }
    _onPressButton = () => {
        Alert.alert("You pressed button!");
    }
    render() {
        return (<View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        }}>
        
            <Button style={{
                fontSize: 20,
                color: 'white',
                backgroundColor: 'tomato',
                padding: 15,
                borderRadius: 16,
            }}
                onPress={this._onPressButton}
            >
            button
          </Button>
          

        </View>)
    }
}


