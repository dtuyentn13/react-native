import React, { Component } from 'react';
import {
    Appregisty,
    ScrollView,
    Image,
    Text,
    View,
    TextInput,
    Dimensions
} from 'react-native';

export default class VerticalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
            // maximumZoomScale={3} on IOS
            // minimumZoomScale={0.2} on IOS
            keyboardDismissMode='on-drag'
            >
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    color: 'white',
                    backgroundColor: 'green',
                    textAlign: 'center'
                }}
                >
                This is a Text
                </Text>
                <TextInput style={{
                    padding: 10,
                    margin: 10,
                    borderWidth: 1
                }}
                placeholder='Enter Text'
                >
                </TextInput>
                <View style={{
                    backgroundColor: 'tomato',
                    margin: 10
            
                }}
                >
                <Text style={{
                    fontSize: 20,
                    padding: 15,
                    color: 'white',
                    textAlign: 'center',
                }}
                >
                Text inside View
                </Text>
                </View>
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
                <Image 
                source={require('../Image/Mask_Group_48_A46_Group_172_pattern.png')}
                style={{width: screenWidth, height: screenWidth * 732 / 732,}}
                >
                </Image>
            </ScrollView>

        )
    }
}