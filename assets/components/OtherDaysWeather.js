import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'


export default function OtherDaysWeather({ data }) {
    const daily = data.daily;
    
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.other_days}>
                <FlatList
                    data={daily}
                    renderItem={({ item }) =>
                        <View style={styles.other_day}>
                            <Image
                                source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
                                style={styles.other_day_icon} />
                            <View style={styles.other_day_infos}>
                                <Text style={styles.other_day_name}>{new Date(item.dt * 1000).toLocaleString('fr-FR', { weekday: 'long', month: 'long', day: 'numeric' })}</Text>
                                <Text style={styles.other_day_time}>{item.weather[0].description}</Text>
                            </View>
                            <View style={styles.other_day_temps}>
                                <Text style={styles.other_day_morning_temp}>{item.temp.day}°</Text>
                                <Text style={styles.other_day_afternoon_temp}>{item.temp.night}°</Text>
                            </View>
                        </View>
                    }
                    keyExtractor={(item, key) => key.toString()} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
    },
    other_days: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20
    },
    other_day: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    other_day_icon: {
        width: 50,
        height: 50
    }
});