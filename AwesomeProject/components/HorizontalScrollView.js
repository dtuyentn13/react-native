import React, { Component } from 'react'
import {
    Appregistry,
    ScrollView,
    Text, View,
    Dimensions
} from 'react-native'

export default class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;

        return (
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                // scrollIndicatorInsets={{top 10, left: 10, bottom: 10, right: 10,}} IOS
                onMomentumScrollBegin={() => {
                    // alert('Begin scrolling')
                }}
                onMomentumScrollEnd={() => {
                    // alert('End scrolling')
                }}
                onScroll={(event) =>{
                    let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y =${event.nativeEvent.contentOffset.y}`
                    console.log(logData);
                }}
                scrollEventThrottle={10}
            >
                <View style={{
                    backgroundColor: 'tomato',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}
                    >
                        Screen 1
                </Text>
                </View>
                <View style={{
                    backgroundColor: 'green',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}
                    >
                        Screen 2
                </Text>
                </View>
                <View style={{
                    backgroundColor: 'yellow',
                    flex: 1,
                    marginTop: 20,
                    width: screenWidth,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                >
                    <Text style={{
                        fontSize: 20,
                        color: 'black'
                    }}
                    >
                        Screen 3
                </Text>
                </View>
            </ScrollView>
        );
    }
}