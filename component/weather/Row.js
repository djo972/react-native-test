import React from 'react'
import {View , Text , StyleSheet,Image} from 'react-native'
import moment from 'moment'
import globalStyle from '../Style'
import 'moment/locale/fr'

moment.locale('fr')

export default class Row extends React.Component{

    static propTypes = {
        day: React.PropTypes.object,
        index : React.PropTypes.number
    }
    day(){
        let day = moment(this.props.day.dt *1000).format('ddd')
        return(
            <Text style={[style.white,style.bold]}> {day.toUpperCase()}</Text>
        )
    }
    date(){
        let day = moment(this.props.day.dt *1000).format('DD/MM')
        return(
            <Text style={style.white}>{day}</Text>
        )
    }
    icon ( size = 50){
        const  type = this.props.day.weather[0].main.toLowerCase()
        console.log(type)
        let image
        switch (type){
            case 'clouds':
                image = require('../icons/cloudy.png')
                break;
            case 'rain':
                image = require('../icons/rainy.png')
                break
            default:
                image = require('../icons/sun.png')
        }
        return <Image source ={image} style={{width :size,height:size}}/>
        return <Text>fuck</Text>
    }

    render () {
        return (
            <View style={style.view}>
                <View style={{flex:1,flexDirection:'row', alignItems:'center'}}>
                    { this.icon() }
                    <Text style={{marginLeft:10}}>
                        {this.day()} {this.date()}
                    </Text>
                </View>
                <Text style={style.temp}>
                    {Math.round(this.props.day.temp.day)}C°
                </Text>
            </View>
        )
    }
}
const style = StyleSheet.create({
    view :{
        backgroundColor : globalStyle.color,
        borderWidth : 0,
        borderBottomWidth:1,
        // borderBottomColor:'#202340',
        borderBottomColor:'#fff',
        paddingHorizontal:20,
        paddingVertical:10,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
    temp:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:22
    },
    white:{
        color:'#fff'
    },

    bold: {
        fontWeight:'bold'
    }

})