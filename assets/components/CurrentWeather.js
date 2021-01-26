import React, { useEffect } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default function CurrentWeather({ data }) {
    console 
    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <View style={style.container}>
            <Text style={style.day}>Monday 25 December 2021</Text>
        </View>
    )


}
