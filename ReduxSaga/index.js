import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
//Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import CounterContainer from './containers/CounterContainer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga'; 
//Middleware
const sagaMiddleware = createSagaMiddleware();


let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => (
    <Provider store={store}>
        <CounterContainer />
    </Provider>
);
sagaMiddleware.run(rootSaga);
AppRegistry.registerComponent('ReduxSaga', () => App);