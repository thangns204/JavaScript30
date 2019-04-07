/**
 * @format
 */
 /**
  * Sample React Native App
  * https://github.com/facebook/react-native
  *
  * @format
  * @flow
  */


import {AppRegistry} from 'react-native';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    console.log("Thang Constructor");
  }



  render() {
      console.log("Thang render");
    return(
      <View style={css.all}>
        <View style={css.row}>
            <View style={css.column}>
                <Text style={css.number}>1</Text>
            </View>

            <View style={css.column}>
              <Text style={css.number}>2</Text>
              <Text style={css.word}>ABC</Text>
            </View>

            <View style={css.column}>
              <Text style={css.number}>3</Text>
            <Text style={css.word}>DEF</Text>
            </View>

        </View>

        <View style={css.row}>
          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>
        </View>

        <View style={css.row}>

          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>

        </View>

        <View style={css.row}>
          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>

          <View style={css.column}>

          </View>

        </View>

      </View>
    )

  }
}

var css = StyleSheet.create({
  all:{
    flex: 1
  },

  row: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flex:1,
    flexDirection: 'row'
  },

  column: {
    borderWidth: 1,
    borderColor: 'grey',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  number: {
    fontSize: 40
  },

  word: {

  }
});


AppRegistry.registerComponent("DauTruong", () => App);
