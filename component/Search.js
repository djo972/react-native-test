import React from 'react';
import {TextInput , View} from 'react-native'

export default class Search extends React.Component{

    constructor (props){
        super(props)
        this.state = {
            city:'Villejuif'
        }
    }

    setCity (city){
        this.setState({city})
    }
    render (){

        return(
                <TextInput
                    style={{height: 40}}
                    value = {this.state.city}
                    onChangeText={(text) =>this.setCity(text)}
                />
            )

    }

}
