import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class JustifyContentExaple extends Component {
    render() {
        return (
            <View style={ {
                backgroundColor: 'tomato',
                flexDirection: 'row',
                flex: 100,
                // justifyContent: 'flex-start'
                // justifyContent: 'flex-end'
                justifyContent: 'center',
                alignItems: 'center'
                
            } }>
            <View style={ {width: 50, height: 50, backgroundColor: 'gray', margin: 20, } }></View>
            <View style={ {width: 50, height: 50, backgroundColor: 'white', margin: 20,} }></View>
            <View style={ {width: 50, height: 50, backgroundColor: 'black', margin: 20,} }></View>
            </View>
        )
    }
}
