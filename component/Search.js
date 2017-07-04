import React from 'react';
import style from './Style'
import List from './List'
import {TextInput , View,Image,Button} from 'react-native'
import { StackNavigator} from 'react-navigation'


 class Search extends React.Component{

     static navigationOptions = {
     title:'rechercher une ville',
     tabBarIcon:( ) => {
         return <Image style={{width:20,height: 20}} source={require('./icons/home.png')}/>
     }
 }

    constructor (props){
        super(props)
        this.state = {
            city:'Villejuif'
        }
    }
    setCity (city){
        this.setState({city})
    }
    submit(){
        this.props.navigation.navigate('Result' , {city : this.state.city})
    }
    render (){
        return(
        <View style={style.contenair}>
            <TextInput
                style={style.input}
                value = {this.state.city}
                onChangeText={(text) =>this.setCity(text)}
            />
            <Button color={style.color}  onPress={ () =>this.submit()} title="rechercher une ville"/>
        </View>

            )
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle,
}

export default  StackNavigator ({
    Result : {
        screen : List,
        navigationOptions
    },
    Search :{
        screen : Search,
        navigationOptions
    }

})
