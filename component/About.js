import React from 'react';
import style from './Style'
import { StyleSheet, Text, View ,Image,Button} from 'react-native';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon:  ()  => {
            return <Image   style={{width: 20, height: 20}} source={require('./icons/avatar.png')}/>
        }
    }

    search(){
        this.props.navigation.navigate('Search')
    }

    render() {
        return (
            <View style={style.contenair}>
                <Text >Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Animi, aperiam
                    deleniti dignissimos dolorem ex explicabo hic illum labore
                    nesciunt nihil possimus quibusdam, quos repellat similique sit soluta tempore unde velit.
                </Text>
                <Button color={style.color} onPress={ ()=> this.search() } title="Rechercher"/>
            </View>
        );
    }
}


