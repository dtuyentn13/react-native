import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text, View, Platform
} from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props)
        console.log(`${Date.now()}.This is contruction`);
        this.state = {
            numberOfRefresh: 0
        };
        setInterval(() =>{
            console.log(`${Date.now()}. Change State each 2second`);
            this.setState(previousState => {
                return { numberOfRefresh: previousState.numberOfRefresh + 1 };
            });
        }, 1000);
    }
    componentWillMount() {
        console.log(`${Date.now()}. This is componentWillMount`);
    }
    componentDidMount() {
        console.log(`${Math.floor(Date.now())}. This is componentDidMount`);
    }
    shouldComponentUpdate() {
        console.log(`${Date.now()}. This is ComponentUpdate`);
        return true;
    }
    componentWillUpdate() {
        console.log(`${Date.now()}. This is componentWillUpdate`);
    }
    componentDidUpdate() {
        console.log(`${Math.floor(Date.now())}. This is componentDidUpdate`);
    }
    render() {
        console.log(`${Math.floor(Date.now())}. This is render function`)
        let textToDisPlay = `Number of refresh: ${this.state.numberOfRefresh}`;
        return (
            <View style={{
                flex: 1,
                marginTop: 100,
            }}>
            <Text>LifeCycle Test</Text>
            <Text>{textToDisPlay}</Text>
            </View>
        );
    }
}
export default class LifeCycleComponent extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        var lifeCycle = <LifeCycle propA="aaa"></LifeCycle>
        return (
            <View>
                {lifeCycle}
            </View>
        )
    }
}