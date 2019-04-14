import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';
import ComC from './ComC.js';


export default class ComB extends Component {

clickB(){
  this.refs.MrC.ChangeColor();
}

  render() {
    return (
      <View style = {{
        width: 150,
        height: 150,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <ComC ref="MrC"/ >
      </View>
    )
  }
}

const styles = StyleSheet.create({
  comAV: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
