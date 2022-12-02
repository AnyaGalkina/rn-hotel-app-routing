import {NestedRootProfile, useAppNavigation} from '../main/types';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {PADDING, WIDTH} from '../main/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NestedRootProfile>();


const PersonalInfoScreen = () => {
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRootProfile) => {
        navigate('Profile', {screen: screenNam})
    }
    return <View style={styles.screenContainer}>
        {/*<Image source={{uri: "https://img.freepik.com/free-vector/inbox-cleanup-concept-illustration_114360-1020.jpg?w=1060&t=st=1669979008~exp=1669979608~hmac=61af4f1a0d4069a48f8a239b41e3c51a0687bad7d23a0ed3f14d65b273480829"}} />*/}
        <Text>Personal Info</Text>
        <Button title="to Privacy Settings" onPress={() => {
            goTo('Privacy')
        }}/>
        <Button title="to Payments" onPress={() => {
            goTo('Payments')
        }}/>
        <Button title="to Hosting" onPress={() => {
            goTo('Hosting')
        }}/>
        <Button title="to Support" onPress={() => {
            goTo('Support')
        }}/>
        <Button title="to LogOut" onPress={() => {
            goTo('LogOut')
        }}/>
    </View>
}

const PrivacyScreen = () => {
    const {navigate} = useAppNavigation();

    const goTo = (screenNam: keyof NestedRootProfile) => {
        navigate('Profile', {screen: screenNam})
    }
    return <View style={styles.screenContainer}>
        <Text>Set privacy</Text>
        <Button title="to Payments" onPress={() => {
            goTo('Payments')
        }}/>
        <Button title="to Hosting" onPress={() => {
            goTo('Hosting')
        }}/>
    </View>
}

const PaymentsScreen = () => {
    const {navigate} = useAppNavigation();

    const goTo = (screenNam: keyof NestedRootProfile) => {
        navigate('Profile', {screen: screenNam})
    }
    return <View style={styles.screenContainer}>
        <Text>No payments needed</Text>
        {/*<Button title="to Support" onPress={() => {*/}
        {/*    goTo('Support')*/}
        {/*}}/>*/}
        <Button title="to Personal Info" onPress={() => {
            goTo('PersonalInfo')
        }}/>
    </View>
}

const HostingScreen = () => {
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRootProfile) => {
        navigate('Profile', {screen: screenNam})
    }

    return <View style={styles.screenContainer}>
        <Text>Start hosting, send message to support</Text>
        <Button title="to Support" onPress={() => {
            goTo('Support')
        }}/>
    </View>
}

const SupportScreen = () => {
    const navigation = useAppNavigation();

    return <View style={styles.screenContainer}>
        <Text>Send message to our Support Team</Text>
        <TextInput
            style={styles.search}
            clearButtonMode="always"
            inlineImageLeft="search_icon"
            onSubmitEditing={() => Alert.alert('Your message has been send')}
        />
        <Button title="Go back" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
}

const LogOutScreen = () => {
    const navigation = useAppNavigation();

    return <View style={styles.screenContainer}>
        <Text style={{marginBottom: 60}}>Are you sure you want to log out?</Text>
        <TouchableOpacity style={{backgroundColor: "#ff385c", padding: 20, borderRadius:8}} onPress={() => {
            Alert.alert('Log out successfully')
        }}>
            <Text style={{color: "#fff"}}>Log out</Text>
        </TouchableOpacity>
    </View>
}


export function ProfileScreen() {
    return (
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff385c' },
            }}>
                <Stack.Screen name={'PersonalInfo'} component={PersonalInfoScreen} options={{ title: 'Personal Info' }}/>
                <Stack.Screen name={'Privacy'} component={PrivacyScreen}/>
                <Stack.Screen name={'Payments'} component={PaymentsScreen}/>
                <Stack.Screen name={'Hosting'} component={HostingScreen}/>
                <Stack.Screen name={'Support'} component={SupportScreen}/>
                <Stack.Screen name={'LogOut'} component={LogOutScreen}/>
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
    search: {
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 20,
        marginTop: 20,
        borderColor: 'gray',
        width: (WIDTH - 4 * PADDING),
        paddingVertical: 15,
    },
});