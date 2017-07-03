import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class About extends React.Component {
    render() {
        return (
            <View style={style.container}>
                <Text >Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Animi, aperiam
                    deleniti dignissimos dolorem ex explicabo hic illum labore
                    nesciunt nihil possimus quibusdam, quos repellat similique sit soluta tempore unde velit.
                </Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#ff4b66',
    },

});
