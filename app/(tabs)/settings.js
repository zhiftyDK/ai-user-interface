import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SettingsPage = () => {
    const [name, setName] = useState("");
    const [link, setLink] = useState("");

    (async () => {
        setName(await AsyncStorage.getItem("settings-name"));
        setLink(await AsyncStorage.getItem("settings-link"));
    })();

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Ai Name</Text>
            <TextInput placeholder="Name" style={styles.textInput} onChangeText={async (text) => await AsyncStorage.setItem("settings-name", text)}>{name}</TextInput>
            
            <Text style={[styles.label, { marginTop: 30 }]}>Websocket Server Link</Text>
            <TextInput placeholder="Link" style={styles.textInput} onChangeText={async (text) => await AsyncStorage.setItem("settings-link", text)}>{link}</TextInput>
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
    label: {
        color: "#fff",
        fontFamily: "Orbitron_400Regular"
    },
    textInput: {
        backgroundColor: "white",
        width: "70%",
        height: 50,
        paddingHorizontal: "5%",
        borderRadius: 30,
        marginTop: 10,
        fontFamily: "Orbitron_400Regular"
    }
});

export default SettingsPage;