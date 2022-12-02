import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NestedRootInbox, useAppNavigation} from '../main/types';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {HEIGHT, PADDING, WIDTH} from '../main/Main';


const Stack = createNativeStackNavigator<NestedRootInbox>();


const MessagesScreen = () => {
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRootInbox) => {
        navigate('Inbox', {screen: screenNam})
    }
    return <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
            style={{width: WIDTH, height:300}}
            source={{uri: 'https://img.freepik.com/free-vector/inbox-cleanup-concept-illustration_114360-1020.jpg?w=1060&t=st=1669979008~exp=1669979608~hmac=61af4f1a0d4069a48f8a239b41e3c51a0687bad7d23a0ed3f14d65b273480829'}}/>
        {/*<Text>You have new messages</Text>*/}
        <Button title="to Read Messages" onPress={() => {
            goTo('Read')
        }}/>
        <Button title="to Unread Messages" onPress={() => {
            goTo('Unread')
        }}/>
        <Button title="to Notifications" onPress={() => {
            goTo('Notifications')
        }}/>
    </View>
}

const NotificationsScreen = () => {
    const {navigate} = useAppNavigation();

    const goTo = (screenNam: keyof NestedRootInbox) => {
        navigate('Inbox', {screen: screenNam})
    }
    return <View style={styles.screenContainer}>
        <Text>You don't have notifications</Text>
        <Button title="to Messages" onPress={() => {
            goTo('Messages')
        }}/>
    </View>
}

const ReadScreen = () => {
    const navigation = useAppNavigation();

    return <View style={styles.screenContainer}>
        <Text>That's an old message</Text>
        <Button title="Go back" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
}

const UnreadScreen = () => {
    const navigation = useAppNavigation();

    return <View style={styles.screenContainer}>
        <Text>That's a new message</Text>
        <Button title="Go back" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
}


export function InboxScreen() {

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#ff385c' },
            }}>
                <Stack.Screen name={'Messages'} component={MessagesScreen}/>
                <Stack.Screen name={'Notifications'} component={NotificationsScreen}/>
                <Stack.Screen name={'Read'} component={ReadScreen}/>
                <Stack.Screen name={'Unread'} component={UnreadScreen}/>
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