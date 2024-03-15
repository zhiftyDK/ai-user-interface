import { useEffect, useState, useCallback } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SplashScreen, Tabs } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Orbitron_400Regular } from '@expo-google-fonts/orbitron';

export default function TabLayout() {  
    const [name, setName] = useState("Home");
    
    const [fontsLoaded] = useFonts({
        Orbitron_400Regular,
    });

    useEffect(() => {
        (async () => {
            await SplashScreen.preventAutoHideAsync();
            const item = await AsyncStorage.getItem("settings-name");
            setName((item ? item : "Home"));
        })();
    }, []);

    if (!fontsLoaded) {
        return null;
    } else {
        SplashScreen.hideAsync();
    }

    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: '#fff', tabBarStyle: {backgroundColor: "#262833"}, headerStyle: {backgroundColor: "#262833"}, headerTitleStyle: {color: "#fff", fontFamily: "Orbitron_400Regular"}}}>
        <Tabs.Screen
            name="index"
            options={{
                title: `${name}`,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="calendar"
            options={{
                title: 'Calendar',
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="calendar" size={24} color={color} />,
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: `Settings`,
                tabBarIcon: ({ color }) => <MaterialCommunityIcons name="cog" size={24} color={color} />,
            }}
        />
        </Tabs>
    );
}