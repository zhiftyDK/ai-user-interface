import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomePage = () => {
    return (
        <View style={styles.container}>
            <Text style={{color: "#fff", fontFamily: "Orbitron_400Regular"}}>HomePage</Text>
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

export default HomePage;
