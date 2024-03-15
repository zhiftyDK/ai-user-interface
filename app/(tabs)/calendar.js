import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CalendarPage = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "#fff", fontFamily: "Orbitron_400Regular"}}>CalendarPage</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#323440",
    },
});


export default CalendarPage;
