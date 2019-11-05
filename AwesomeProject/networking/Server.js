import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'http://192.168.1.95:3000/posts';
const apiInsertNewFood = 'http://192.168.1.95:3000/posts';
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        console.log(JSON.stringify(responseJson))
        return responseJson;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}

//send post request to insert new data
async function insertNewFoodToServer(params) {
    try {
        let response = await fetch(apiInsertNewFood, {
            method: 'POST',
            headers: {
                'Accep': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        });
        let responseJson = await response.json();
        return responseJson.result;
    }
    catch (error) {
        debugger
        console.error(`Error is : ${error}`);
    }
}
export { insertNewFoodToServer };
export { getFoodsFromServer };