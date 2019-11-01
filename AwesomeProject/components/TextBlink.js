import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showText: true
        };
        var taskToDo = () => {
            this.state = "ABC" //Do not allow, only in constructor
            this.setState(previosState =>{
                return {
                    showText: !previosState.showText
                }
            });
        };
        const timeToBlink = 1000; //1000 miliseconds
        setInterval(taskToDo, timeToBlink)
    }


    render() {
    //After state changed, component is rendered
    let textToDisPlay = this.state.showText ? this.props.inputText : 'HIHIHI';
    return (
        <Text>{ textToDisPlay }</Text>
    );
    }
}
export default class TextBlink extends Component {
    render() {
        return (
            <View >
            <Blink inputText='hello, how are you?'></Blink>
            <Blink inputText='iam fine. thank you'></Blink>
            
            </View>
        )
    }
}
