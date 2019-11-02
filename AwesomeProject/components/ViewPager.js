import React, { Component } from 'react'
import {
  Appregistry,
  StyleSheet,
  ScrollView,
  Text, View,
} from 'react-native'

import ViewPager from '@react-native-community/viewpager';

export default class ViewPagerExample extends Component {
  render() {
    return (
      <ViewPager style={styles.viewPager}
        initialPage={0}
        onPageScroll={(event) => {
          console.log(`offset = ${event.nativeEvent.offset}`)
        }}
        onPageScrollStateChanged={(state) => {
          console.log(`Scrolling state = ${state}`);
        }}
        onPageSelected={(event) => {
          console.log(`Scrolled to page: ${event.nativeEvent.position}`)
        }}
      >
        <View style={styles.firstPage}>
          <Text style={styles.textStyle}>First page</Text>
        </View>
        <View style={styles.secondPage}>
          <Text style={styles.textStyle}>Second page</Text>
        </View>
        <View style={styles.thirdPage}>
          <Text style={styles.textStyle}>Third page</Text>
        </View>
      </ViewPager>
    );
  }
}


const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 15,
    color: 'white',
    textAlign: 'center'
  },
  firstPage: {
    backgroundColor: 'tomato'
  },
  secondPage: {
    backgroundColor: 'green'
  },
  thirdPage: {
    backgroundColor: 'lightpink'
  }
});