import React, { Component } from 'react'
import {
    AppRegistry,
    FlatList,
    StyleSheet,
    Text, View, Image,
    ImageBackground,
    Alert, Platform,
    TouchableHighlight, TouchableOpacity
} from 'react-native'

import { horizontalStatus } from '../Data/horizontalFlatListdata/'
import { horizontalFlatListData } from '../Data/horizontalFlatListdata';
// import Icon from 'react-native-ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

function HorizontalFlatListItem ({ item, index, parentFlatList }) {
console.log(item)
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
                width: 90,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: 'gray',
                margin: 4
            }}
            >
                <TouchableOpacity onPress={() => {
                    alert(`You pressed: ${item.hour}`)
                }}
                    style={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                    }}
                >
                </TouchableOpacity>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20,
                }}
                >
                    {item.hour}
                    {/* JSON.stringify(this.props.item.status) */}
                </Text>
                <Icon name={(Platform.OS === 'ios') ? item.status.ios : item.status.android}
                    size={30}
                    color='white' />
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    margin: 10,
                }}
                >
                    {item.degrees} ℉
            </Text>
            </View>
        )
    }

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}
            >
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                }}>
                    <Image style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: null,
                        height: null,
                        backgroundColor: 'transparent',
                        justifyContent: 'center'
                    }}
                        source={require('../Image/dGhpZW5uaGllbg.jpg')}
                    >
                    </Image>
                </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    backgroundColor: 'transparent',
                    margin: 10,
                }}
                >Weather forecast
            </Text>
                <View style={{ height: 150 }}>
                    <FlatList
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5,
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({ item, index }) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this}>

                                </HorizontalFlatListItem>);

                        }}
                        keyExtractor={(item, index) => item.hour}
                    >
                    </FlatList>
                </View>
            </View>
        );
    }
}