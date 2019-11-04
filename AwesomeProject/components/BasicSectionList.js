import React, { Component } from 'react'
import {
    AppRegistry,
    SectionList, StyleSheet, Text, View, Alert, Platform,
} from 'react-native';
import { sectionListData } from '../Data/sectionListData';

class SectionListItem extends Component {
    render() {

        // console.log(this.props);
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                backgroundColor: 'tomato'
            }}>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>{this.props.item.name}
                </Text>

                <Text style={{
                    fontSize: 16,
                    color: 'rgb(173, 252, 250)',
                    marginLeft: 20,
                    marginRight: 10,
                }}>{this.props.item.description}
                </Text>
                <View style={{backgroundColor: 'white', height: 1, margin: 4, marginLeft: 20, marginRight: 10}}></View>

            </View>
        )
    }
}
class SectionHeader extends Component {

    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'orange'
            }}>
            <Text style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
                margin: 20
            }}>{this.props.section.title}
            </Text>
            </View>
        )
    }
}
export default class BasicSectionList extends Component {
    render() {
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <SectionList
                    renderItem={({ item, index }) =>
                    <SectionListItem item={item} index={index} />
                    }
                    renderSectionHeader={({section}) => 
                        <SectionHeader section={section} />
                    }
                    sections={sectionListData}
                    keyExtractor={(item, index) => item.name}
                >
                </SectionList>
            </View>
        )
    }
}