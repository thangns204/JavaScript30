import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import ComB from './ComB.js';


export default class ComA extends Component {
clickA(){
  this.refs.MrB.clickB();
}

  render() {
    return (
      <View style = {{
        width: 200,
        height: 200,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ComB ref="MrB"/ >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comAV: {
    width: 200,
    height: 200,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
