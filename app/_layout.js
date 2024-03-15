import { Stack } from 'expo-router/stack';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
    );
}