import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Main} from './src/screens/main/Main';

export default function App() {
    return (
        <NavigationContainer>
            <Main/>
        </NavigationContainer>
    );
}
