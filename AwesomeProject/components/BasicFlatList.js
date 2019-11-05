import React, { Component } from 'react';
import {
    Appregistry,
    FlatList,
    StyleSheet,
    Text, RefreshControl,
    View, Image,
    Alert,
    Platform,
    TouchableHighlight
} from 'react-native';
import flatListData from '../Data/flatListData';
import SwipeOut from 'react-native-swipeout';
import AddModal from './AddModal';
import EditModal from './EditModal';

import { getFoodsFromServer } from '../networking/Server';

class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowkey: null,
            numberOfRefresh: 0
        };
    }
    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return {
                numberOfRefresh: prevState.numberOfRefresh + 1
            };
        });
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowkey != null) {
                    this.setState({ activeRowkey: null });
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowkey: this.props.item.key });
            },
            right: [
                {
                    onPress: () => {
                        // alert('Update');
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this)
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowkey;
                        Alert.alert(
                            'Alert',
                            'Are you sure want to delete',
                            [
                                { text: 'No', onPress: () => console.log('Cancel Prossed'), style: 'cancel' },
                                {
                                    text: 'Yes', onPress: () => {
                                        flatListData.splice(this.props.index, 1);
                                        //Refresh Flatlist
                                        this.props.parentFlatList.refreshFlatList(deletingRow);

                                    }
                                },
                            ]
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        };
        return (
            <SwipeOut {...swipeSettings}>
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
                            source={{ uri: this.props.item.avatar }}
                            style={{ width: 100, height: 100, }}
                        >
                        </Image>
                        <View style={{
                            flex: 1,
                            flexDirection: 'column',

                        }}>
                            <Text style={styles.textStyle}>{this.props.item.id}</Text>
                            <Text style={styles.textStyle}>{this.props.item.email}</Text>
                            <Text style={styles.textStyle}>{this.props.item.first_name + this.props.item.last_name}</Text>
                        </View>

                    </View>
                    <View style={{
                        height: 1,
                        color: 'white'
                    }}>
                    </View>
                </View>
            </SwipeOut>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
        color: 'white',
        padding: 5,
        fontSize: 16,
        marginLeft: 5,

    }
});

export default class BasicFlatList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            deletedRowKey: null,
            refreshing: false,
            foodsFromServer: []
        });
        this._onPressAdd = this._onPressAdd.bind(this);
    }
    componentDidMount() {
        this.refreshDataFromServer();
    }

    refreshDataFromServer = () => {
        this.setState({ refreshing: true });
        getFoodsFromServer().then((foods) => {
            console.log(foods);
            this.setState({ foodsFromServer: foods });
            this.setState({ refreshing: false });
        }).catch((error) => {
            this.setState({ foodsFromServer: [] });
            this.setState({ refreshing: false });
        });
    }
    onRefresh = () => {
        this.refreshDataFromServer();
    }
    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: true
            };
        });
        this.refs.flatList.scrollToEnd();
    }
    _onPressAdd() {
        // alert('You Add Item');
        this.refs.addModal.showAddModal();
    }
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                height: 150,
                marginTop: Platform.OS === 'ios' ? 34 : 0
            }}
            >
                <View style={{
                    backgroundColor: 'tomato',
                    height: 64,
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <TouchableHighlight
                        style={{ marginRight: 10 }}
                        underlayColor='tomato'
                        onPress={this._onPressAdd}
                    >
                        <Image
                            style={{ width: 35, height: 35 }}
                            source={require('../iconns/icons-add.png')}
                        />
                    </TouchableHighlight>
                </View>
                <FlatList
                    ref={"flatList"}
                    // data={flatListData}
                    data={this.state.foodsFromServer}
                    renderItem={({ item, index }) => {
                        //console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                        return (
                            <FlatListItem item={item} index={index} parentFlatList={this}>
                            </FlatListItem>
                        );
                    }}
                    keyExtractor={(item, index) => item.name}
                    refreshControl={<RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this.onRefresh}
                    />}
                >
                </FlatList>
                <AddModal ref={'addModal'} parentFlatList={this}>
                </AddModal>
                <EditModal ref={'editModal'} parentFlatList={this}>
                </EditModal>
            </View>
        )
    }
}
