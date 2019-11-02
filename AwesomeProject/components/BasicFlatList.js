import React, { Component } from 'react';
import {
    Appregistry,
    FlatList,
    StyleSheet,
    Text,
    View, Image
} from 'react-native'
import flatListData from '../Data/flatListData'

class FlatListItem extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "column"
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    // backgroundColor: this.props.index % 2 == 0 ? 'seagreen' : 'tomato'
                    backgroundColor: 'seagreen'
                }}>
                    <Image
                        source={{ uri: this.props.item.imageUrl }}
                        style={{ width: 100, height: 100, margin: 5 }}
                    >
                    </Image>
                    <View style={{
                        flexDirection: 'column',
                        flex: 1,
                        height: 100
                    }}
                    >
                        <Text style={styles.textStyle}>{this.props.item.name}</Text>
                        <Text style={styles.textStyle}>{this.props.item.foodDescription}</Text>
                    </View>


                </View>
                <View style={{
                    height: 1,
                    color: 'white'
                }}>
                </View>
            </View>
        )
    }
}

export default class BasicFlatList extends Component {
    render() {
        return (
            <View style={{
                flex: 1,

            }}
            >
                <FlatList
                    data={flatListData}
                    renderItem={({ item, index }) => {
                        // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                        return (
                            <FlatListItem item={item} index={index}>
                            </FlatListItem>
                        )
                    }}
                >
                </FlatList>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
});