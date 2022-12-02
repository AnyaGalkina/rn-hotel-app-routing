import React from 'react';
import {StyleSheet, Text, View, Button, Image, Dimensions, ListRenderItem} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {NestedRoot, Root, useAppNavigation, UsersPropsType} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Header} from '../header/Header';


const dataFooter = [
    {
        id: 1,
        component: HomeScreen,
        title: 'Home',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/751/751463.png?w=1060&t=st=1668438538~exp=1668439138~hmac=29bc8095bd568a59891753998ba225ce599b524d8ec3c4eecd4e8d6f92533f22'
    },
    {
        id: 114,
        // component: InboxScreen,
        component: InboxScreen,
        title: 'Inbox',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/481/481659.png?w=1060&t=st=1668438904~exp=1668439504~hmac=ab77cd71dfb50ae4bd6c3c7ca74708e8fe4612970ee592fcfa53a89d2f4d062a'
    },
    {
        id: 111,
        // component: TipsScreen,
        component: TipsScreen,
        title: 'Tips',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/1237/1237974.png?w=1060&t=st=1668438488~exp=1668439088~hmac=00fdd6a4ac9cb089f8dbdd143085710e9d9641fa1a0e7a871a3c15b3b7959ce6'
    },
    {
        id: 11,
        // component: WishListScreen,
        component: WishListScreen,
        title: 'WishList',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/49/49955.png?w=1060&t=st=1668438435~exp=1668439035~hmac=915ab0ad7c8b0efc80d582a6bc2f3ec94b4a383ad5715c78437afb5d5b79273b'
    },
    {
        id: 117,
        // component: ProfileScreen,
        component: ProfileScreen,
        title: 'Profile',
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/1246/1246351.png?w=1060&t=st=1668438509~exp=1668439109~hmac=3ea61ad56c98c00bb000364aaee6721a22cb42f4f8caf18f09dd8f9511ad2f66'
    }
];

type DataPropertyType = {
    id: number;
    country: string;
    propertyName: string;
    price: number;
    date: string;
    imgSrc: string
}

const countries = ['USA', 'Argentina', 'New Zealand', 'Thailand'];
const propertiesName = ['villa', 'appartement', 'house', 'hotel'];
const prices = [100, 200, 500, 50, 300];
const dates = ['28 Nav - 3 Dec', '3 Dec - 25 Dec', '25 Dec - 18 Jan', '18 Jav - 15 Mar'];
const imgSrcs = [
    'https://a0.muscache.com/im/pictures/8e4334cc-4484-4af7-894e-823b85999449.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/d7c1f140-c33a-4d68-aaf8-b7b8d7292b11.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/c06def22-bd48-4900-8e7c-ca46092f952a.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720'
]

const dataProperty: DataPropertyType[] = new Array(50).fill(null).map((_, index) => ({
    id: index + 1,
    country: countries[index % countries.length],
    propertyName: propertiesName[index % propertiesName.length],
    price: prices[index % prices.length],
    date: dates[index % dates.length],
    imgSrc: imgSrcs[index % imgSrcs.length],
}));



const Stack = createNativeStackNavigator<NestedRoot>();

function InboxScreen(){
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRoot) => {
        // navigate('Home', {screen: screenNam})
        // navigate('Home', {screen: screenNam, params: {screen: "Settings"}})
    }


    return <View style={{marginTop: 60}}><Text>Login</Text>
        <Button title="to Reg" onPress={() => {
            goTo('Reg')
        }}/>
        <Button title="to Forgot" onPress={() => {
            goTo('Forgot')
        }}/>
    </View>
}

const RegScreen = () => {
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRoot) => {
        // navigate('Home', {screen: screenNam})
    }

    return <View style={{marginTop: 60}}><Text>Reg</Text>
        <Button title="to Login" onPress={() => {
            goTo('Login')
        }}/>
        <Button title="to Forgot" onPress={() => {
            goTo('Forgot')
        }}/>
    </View>
}

const ForgotScreen = () => {
    const navigation = useAppNavigation();

    return <View style={{marginTop: 60}}><Text>ForgotScreen</Text>
        <Button title="Go back" onPress={() => {
            navigation.goBack();
        }}/>
    </View>
}


function HomeScreen() {
    const navigation = useAppNavigation();

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator>
                <Stack.Screen name={'Login'} component={InboxScreen}/>
                <Stack.Screen name={'Reg'} component={RegScreen}/>
                <Stack.Screen name={'Forgot'} component={ForgotScreen}/>
            </Stack.Navigator>
            {/*<Text>Home Screen</Text>*/}
            {/*<Button title="to Details" onPress={() => {*/}
            {/*    navigation.navigate('Details')*/}
            {/*}}/>*/}
        </View>
    );
}

function ProfileScreen() {
    const navigation = useAppNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title="to Users" onPress={() => {
                // navigation.navigate('Users',
                //     // {id: 1, name: '2', age: 3}
                // )
            }}/>
        </View>
    );
}
function TipsScreen() {
    const navigation = useAppNavigation();

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button title="to Users" onPress={() => {
                // navigation.navigate('Users',
                //     // {id: 1, name: '2', age: 3}
                // )
            }}/>
        </View>
    );
}

function WishListScreen(
    // {route}: UsersPropsType
) {
    const navigation = useAppNavigation();
    // const {id, name, age } = route.params;
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Users Screen</Text>
            {/*<Text>id: {id}</Text>*/}
            {/*<Text>name: {name}</Text>*/}
            {/*<Text>age: {age}</Text>*/}
            <Button title="to Home" onPress={() => {
                // navigation.navigate('Home', {screen: 'Login'})
            }}/>
        </View>
    );
}

//Tab is the best!
const Tab = createBottomTabNavigator<Root>();

export const {width, height} = Dimensions.get('screen');
export const WIDTH = width;
export const HEIGHT = height;
export const PADDING = 20;


export type DataFilterType = {
    id: number;
    title: string;
    imgSrc: string;
}


export const Main = () => {
    const renderItemData: ListRenderItem<DataFilterType> = ({item}) => {
        const {title, imgSrc} = item;
        return (
            <View style={styles.dataFilter}>
                <Image style={styles.imgSmall}
                       source={{uri: imgSrc}}
                />
                <View>
                    <Text style={styles.filterText}>{title}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header renderItemData={renderItemData}/>
            <Tab.Navigator
                screenOptions={{headerShown: false}}
            >
                {dataFooter.map(data => {
                    return (
                        <Tab.Screen key={data.id} name={data.title} component={data.component}
                                    options={{
                                        title: data.title,
                                        tabBarIcon: ({size, focused, color}) => {
                                            return (
                                                <Image
                                                    style={{width: size, height: size}}
                                                    source={{uri: data.imgSrc}}
                                                />
                                            );
                                        },
                                    }}
                        />
                    )
                })}


                {/*<Tab.Screen name="Home" component={HomeScreen}*/}
                {/*    // options={{headerShown: false}}*/}
                {/*/>*/}
                {/*<Tab.Screen name="Details" component={DetailsScreen}/>*/}
                {/*<Tab.Screen name="Users" component={UsersScreen}/>*/}
            </Tab.Navigator>
            <StatusBar style="auto"/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        paddingHorizontal: 20,
        marginTop: 65,
    },
    dataFilter: {
        padding: 5,
    },
    imgSmall: {
        backgroundColor: '#fff',
        width: 40,
        height: 40,
    },
    filterText: {
        textAlign: 'center',
    }
});
