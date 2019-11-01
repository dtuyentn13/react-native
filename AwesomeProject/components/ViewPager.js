import React, { Component } from 'react'
import {
    Appregistry,
    StyleSheet,
    ScrollView,
    Text, View,
    ViewPagerAndroid
} from 'react-native'

export default class ViewPager extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style={{
                    flex: 1,
                }}
                initialPage={0}
            >
                <View
                    style={{
                        backgroundColor: 'tomato'
                    }}
                >
                <Text
                style={{

                }}
                >Screen 1
                </Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}
