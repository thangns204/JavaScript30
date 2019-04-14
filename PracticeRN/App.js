/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TouchableOpacity, Platform, StyleSheet, Text, View} from 'react-native';
import ComA from './Components/ComA.js';



type Props = {};
export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress = {()=> {
            this.refs.MrA.clickA();
          }}>
          <Text style={styles.welcome}>Click Me</Text>
        </TouchableOpacity>
        <ComA ref="MrA"/ >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
