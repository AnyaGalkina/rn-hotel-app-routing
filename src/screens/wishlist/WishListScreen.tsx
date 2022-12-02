import {NestedRootWishList, useAppNavigation} from '../main/types';
import {Button, FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {HEIGHT, imgSrcs, PADDING, propertiesName, WIDTH} from '../main/Main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<NestedRootWishList>();


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
        <View>
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

    return <View>
        {/*<TouchableOpacity style={{backgroundColor: '#ff385c', padding: 20, borderRadius: 8}} onPress={() => {*/}
        {/*    navigation.goBack();*/}
        {/*}}>*/}
        {/*    <Text style={{color: '#fff'}}>Go back</Text>*/}
        {/*</TouchableOpacity>*/}
        <WishItem country={country} data={dataWishlist}/>
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
                <Stack.Screen name={'MainWishList'} component={MainWishListScreen}/>
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

const styles = StyleSheet.create({
    bold: {
        fontWeight: '700',
    },
});