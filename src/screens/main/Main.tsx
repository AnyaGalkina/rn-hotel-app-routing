import React from 'react';
import {
    Button,
    Dimensions,
    FlatList,
    Image,
    ListRenderItem,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {NestedRootWishList, Root, useAppNavigation} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Header} from '../header/Header';
import {TipsScreen} from '../tips/TipsScreen';
import {InboxScreen} from '../inbox/InboxScreen';
import {ProfileScreen} from '../profile/ProfileScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {WishListScreen} from '../wishlist/WishListScreen';


const dataFooter = [
    {
        id: 1,
        component: HomeScreen,
        title: 'Home' as keyof Root,
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/751/751463.png?w=1060&t=st=1668438538~exp=1668439138~hmac=29bc8095bd568a59891753998ba225ce599b524d8ec3c4eecd4e8d6f92533f22'
    },
    {
        id: 114,
        component: InboxScreen,
        title: 'Inbox' as keyof Root,
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/481/481659.png?w=1060&t=st=1668438904~exp=1668439504~hmac=ab77cd71dfb50ae4bd6c3c7ca74708e8fe4612970ee592fcfa53a89d2f4d062a'
    },
    {
        id: 111,
        component: TipsScreen,
        title: 'Tips' as keyof Root,
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/1237/1237974.png?w=1060&t=st=1668438488~exp=1668439088~hmac=00fdd6a4ac9cb089f8dbdd143085710e9d9641fa1a0e7a871a3c15b3b7959ce6'
    },
    {
        id: 11,
        component: WishListScreen,
        title: 'WishList' as keyof Root,
        imgSrc: 'https://cdn-icons-png.flaticon.com/512/49/49955.png?w=1060&t=st=1668438435~exp=1668439035~hmac=915ab0ad7c8b0efc80d582a6bc2f3ec94b4a383ad5715c78437afb5d5b79273b'
    },
    {
        id: 117,
        component: ProfileScreen,
        title: 'Profile' as keyof Root,
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
export const propertiesName = ['villa', 'appartement', 'house', 'hotel'];
const prices = [100, 200, 500, 50, 300];
const dates = ['28 Nav - 3 Dec', '3 Dec - 25 Dec', '25 Dec - 18 Jan', '18 Jav - 15 Mar'];
export const imgSrcs = [
    'https://a0.muscache.com/im/pictures/8e4334cc-4484-4af7-894e-823b85999449.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/d7c1f140-c33a-4d68-aaf8-b7b8d7292b11.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-50079973/original/c06def22-bd48-4900-8e7c-ca46092f952a.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/miso/Hosting-45465864/original/3d966c94-4c87-479b-8eeb-4889e9fb6ac9.jpeg?im_w=720',
    'https://a0.muscache.com/im/pictures/337660c5-939a-439b-976f-19219dbc80c7.jpg?im_w=720',
    'https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg?im_w=720'
]

const dataProperty: DataPropertyType[] = new Array(6).fill(null).map((_, index) => ({
    id: index + 1,
    country: countries[index % countries.length],
    propertyName: propertiesName[index % propertiesName.length],
    price: prices[index % prices.length],
    date: dates[index % dates.length],
    imgSrc: imgSrcs[index % imgSrcs.length],
}));


const Stack = createNativeStackNavigator<NestedRootWishList>();


function HomeScreen() {
    const navigation = useAppNavigation();

    const renderItemProperty: ListRenderItem<DataPropertyType> = ({item}) => {
        const {country, propertyName, price, date, imgSrc} = item;
        return (
            <View style={styles.item}>
                <Image style={styles.img}
                       source={{uri: imgSrc}}
                />
                <View>
                    <Text style={styles.bold}>{country}</Text>
                    <Text>{propertyName}</Text>
                    <Text style={styles.date}>{date}</Text>
                    <Text style={styles.bold}>{price}</Text>
                </View>
            </View>)
    }

    return (
        <View>
            <FlatList
                data={dataProperty}
                renderItem={renderItemProperty}
                ListEmptyComponent={() => <View><Text>No data</Text></View>}
            />
        </View>
    );
}

type DataWishListType = {
    propertyName: string;
    source: string;
}

const dataWishlist: DataWishListType[] = new Array(10).fill(null).map((el, index) => ({
    propertyName: propertiesName[index % propertiesName.length],
    source: imgSrcs[index % imgSrcs.length]
}));

const MainWishListScreen = () => {
    const {navigate} = useAppNavigation();
    const goTo = (screenNam: keyof NestedRootWishList) => {
        navigate('WishList', {screen: screenNam})
    }
    return <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <Image
            style={{width: WIDTH, height:300}}
            source={{uri: "https://img.freepik.com/free-photo/planning-traveling-trip-notes-wanderkust_53876-127488.jpg?w=2000&t=st=1669985011~exp=1669985611~hmac=6a03ed9b47fe9291fb15daca4a3992ae0719e81d241c7bdb8f201e9c27e4aa9c"}} />
        <Text>Check your wishlists</Text>
        <Button title="to Argentina" onPress={() => {
            goTo('Argentina')
        }}/>
        <Button title="to USA" onPress={() => {
            goTo('USA')
        }}/>
        <Button title="to Thai" onPress={() => {
            goTo('Thai')
        }}/>
        <Button title="to Australia" onPress={() => {
            goTo('Australia')
        }}/>
        <Button title="to NewZealand" onPress={() => {
            goTo('NewZealand')
        }}/>
        <Button title="to Greece" onPress={() => {
            goTo('Greece')
        }}/>
    </View>
}

const WishItem = ({data, country,}: any) => {
    const renderItemProperty: ListRenderItem<DataWishListType> = ({item}) => {
        return (
            <View style={{display: 'flex', flexDirection: "row", justifyContent: 'space-between', marginBottom: 10}}>
                <Image source={{uri: item.source}} style={{width: 80, height: 80}}></Image>
                <View
                    style={{alignItems: "center"}} >
                    <Text style={styles.bold}>{country}</Text>
                    <Text>{item.propertyName}</Text>
                </View>
                <View>
                    <TouchableOpacity style={{padding: 20, borderRadius: 8}} onPress={() => {

                    }}>
                        <Text style={{color: '#fff'}}>🗑</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={renderItemProperty}
                ListEmptyComponent={() => <View><Text>No data</Text></View>}
            />
        </View>
    )
}


const CountryScreen = ({country}: {country: keyof NestedRootWishList}) => {
    const navigation = useAppNavigation();

    return <View style={{flex: 1}}>
        <WishItem country={country} data={dataWishlist}/>

        <TouchableOpacity style={{backgroundColor: '#ff385c', padding: 20, borderRadius: 8}} onPress={() => {
            navigation.goBack();
        }}>
            <Text style={{color: '#fff'}}>Go back</Text>
        </TouchableOpacity>
    </View>
}


export function WishListScreen() {

    const countries: Array<keyof NestedRootWishList> = ['Argentina', 'USA', 'Thai', 'Australia', 'NewZealand', 'Greece'];

    return (
        <View style={{flex: 1}}>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerStyle: {backgroundColor: '#ff385c'},
            }}>
                <Stack.Screen name={'MainWishList'} component={MainWishListScreen} options={{ title: 'Wish list' }}/>
                {countries.map((country , index)=> {
                        return (
                            <Stack.Screen key={index} name={country}>
                                {props => <CountryScreen {...props} country={country}/>}
                            </Stack.Screen>
                        )
                    }
                )}
            </Stack.Navigator>
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
                // screenOptions={{headerShown: false}}
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
            </Tab.Navigator>
            <StatusBar style="auto"/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    },
    bold: {
        fontWeight: '700',
    },
    date: {
        fontWeight: '300',
        fontStyle: 'italic',
    },
    item: {
        marginVertical: 5,
        display: 'flex',
    },
    img: {
        backgroundColor: '#7df5f5',
        width: (WIDTH - 2 * PADDING),
        height: (HEIGHT / 2.5),
    },
    screenContainer: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
});
