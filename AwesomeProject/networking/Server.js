import React, { Component } from 'react';
import { AppRegistry, SectionList, StyleSheet, Text, View, Alert, Platform } from 'react-native';
const apiGetAllFoods = 'https://reqres.in/api/users?page=2';
async function getFoodsFromServer() {
    try {
        let response = await fetch(apiGetAllFoods);
        let responseJson = await response.json();
        console.log(JSON.stringify(responseJson))
        return responseJson.data;
    } catch (error) {
        console.error(`Error is : ${error}`);
    }
}
export {getFoodsFromServer}