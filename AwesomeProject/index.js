// /**
//  * @format
//  */
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Robot from './components/Robot';
import MultipleGreeting from './components/MultipleGreetings';
import TextBlink from './components/TextBlink';
import JustifyContentExample from './components/JustifyContentExample'
import Input from './components/Input'
import Button1 from './components/Button1'
// import App from './App';
import {name as appName} from './app.json';
import App from './App';
import TextInput from './components/Input';
import Touchable from './components/Touchable'
import VerticalScrollView from './components/VerticalScrollView'
import HorizontalScrollView from './components/HorizontalScrollView'
import ViewPager from './components/ViewPager'
import BasicFlatList from './components/BasicFlatList'
import HorizontalFlatList from './components/HorizontalFlatList'
import BasicSectionList from './components/BasicSectionList'


// AppRegistry.registerComponent(appName, () => MultipleGreeting);
// AppRegistry.registerComponent(appName, () => Robot);
// AppRegistry.registerComponent(appName, () => TextBlink);
// AppRegistry.registerComponent(appName, () => JustifyContentExample);
// AppRegistry.registerComponent(appName, () => Input);
// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Button1);
// AppRegistry.registerComponent(appName, () => Touchable);
// AppRegistry.registerComponent(appName, () => VerticalScrollView);
// AppRegistry.registerComponent(appName, () => HorizontalScrollView);
// AppRegistry.registerComponent(appName, () => ViewPager);
// AppRegistry.registerComponent(appName, () => BasicFlatList);
// AppRegistry.registerComponent(appName, () => HorizontalFlatList);
AppRegistry.registerComponent(appName, () => BasicSectionList);





