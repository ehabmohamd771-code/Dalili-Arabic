import 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { PURPLE_DARK } from '../util/constants';
import { I18nManager } from 'react-native';

// تفعيل اتجاه الواجهة العربية من اليمين إلى اليسار.
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1, backgroundColor: PURPLE_DARK }}>
            <KeyboardProvider>
                <StatusBar style="light" />
                <Stack screenOptions={{ headerShown: false, animation: 'slide_from_right' }} />
            </KeyboardProvider>
        </GestureHandlerRootView>
    );
}
