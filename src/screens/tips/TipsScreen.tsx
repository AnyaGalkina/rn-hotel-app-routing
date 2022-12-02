import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function GetHelpScreen() {
    return <View style={styles.screenContainer}>
        <Text>No tips for you.</Text>
        <Text>You are already awesome!</Text>
    </View>
}

export function TipsScreen() {

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff385c' },
            }}>
                <Stack.Screen name={'GetHelp'} component={GetHelpScreen} options={{ title: 'Get Help' }}/>
            </Stack.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    screenContainer: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },

});
