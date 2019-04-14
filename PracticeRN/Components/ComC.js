import React, {Component} from 'react';
import {Text, View, StyleSheet } from 'react-native';


export default class ComC extends Component {

  constructor(props){
    super(props);
    this.state = {
      color: "black"
    }
  }

  ChangeColor(){
    this.setState({
      color: "yellow"
    });
  }

  render() {
    return (
      <View style = {{
        width: 100,
        height: 100,
        backgroundColor: this.state.color,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      </View>
    )
  }
}
