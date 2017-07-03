import React from 'react';
import { StyleSheet, Text,View } from 'react-native';
import Search from "./component/Search";
import About from "./component/About";
import {} from 'react-navigation'

export default class App extends React.Component {
  render() {
    return (
        <View style={{marginVertical :100,padding:10}}>
            <Search/>
        </View>
    );
  }
}


