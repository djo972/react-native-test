import React from 'react'
import {View , Text , StyleSheet} from 'react-native'
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
            <Text style={style.white}> {day}</Text>
        )
    }
    icon ( size = 50){
        const  type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type){
            case 'clouds':
                image = require('../icons/cloudy.png')
                break;
            case 'rain':
                image=require('../icons/rainy.png')
                break
            default:
                image = require('../icons/sun.png')
        }
        // return <image source ={image} style={{width : size, height : size}}/>
    }

    render () {
        return (
            <View style={style.view}>
                <Text>
                    {this.day()} {this.date()}
                </Text>
                { this.icon() }
                <Text style={style.temp}>
                    {this.props.day.temp.day}C°
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
        borderBottomColor:'#202340',
        paddingHorizontal:20,
        paddingVertical:10,
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between'

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