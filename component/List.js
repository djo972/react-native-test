import React from 'react'
import style from './Style'
import axios from 'axios'
import WeatherRow from './weather/Row'
import { Text, ActivityIndicator,ListView} from 'react-native'

export default class  List extends React.Component{

    static navigationOptions = ({navigation}) =>{
        return{
            // title : `Météo / ${navigation.state.params.city}`
            title : `Météo / villejuif`
        }
    }

    constructor (props){
        super(props)

        this.state={
            // city:this.props.navigation.state.params.city,
            city:'Villejuif',
            report:null
        }
        this.fetchWeather()
    }
    fetchWeather(){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=1b16884eab17ddc058d45c7e44d75104`)
            .then((response) => {
           this.setState({report: response.data})
            })
    }
    render (){
        if(this.state.report === null){
            return(
                <ActivityIndicator color={style.color} style={style.loading} size="large"/>
            )
        } else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row,j,k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
                />
            )
        }

    }

}
