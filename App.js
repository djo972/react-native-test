import React from 'react';
import { StyleSheet, Text,View,StatusBar } from 'react-native';
import Search from "./component/Search";
import About from "./component/About";
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
    Search : {
        screen: Search
    },
    About :{
        screen : About
    }

},{
    tabBarPosition: 'bottom',
    tabBarOptions:{
        showIcon:true,
        showLabel:false,
        indicatorStyle:{
            height:2,
            backgroundColor:"#fff"
        },
        style: {
            backgroundColor:'#a2273c',
            borderTopWidth : 1,
            borderColor : '#3f101c'
        },
    }
})

export default class App extends React.Component {
  render() {
    return (
        <View  style={{flex : 1}}>
            <StatusBar hidden={true}/>
            <Tabs/>
            {/*<Search style={{marginVertical :100,padding:10}}/>*/}
        </View>
    );
  }
}


