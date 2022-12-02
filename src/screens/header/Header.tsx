import {
    FlatList,
    ListRenderItem,
    TextInput,
    View,
    StyleSheet,
    Alert,
    Dimensions
} from 'react-native';
import {useState} from 'react';
import React from 'react';

export const {width, height} = Dimensions.get('screen');
export const WIDTH = width;
export const HEIGHT = height;
export const PADDING = 20;

export type DataFilterType = {
    id: number;
    title: string;
    imgSrc: string;
}
const dataFilter = [
    {id: 1, title: 'Beaches', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1238/1238964.png?w=1060&t=st=1668438669~exp=1668439269~hmac=fd0ebdea0213ee07affc5047751ecf12ab7f4a9e0224c245a75a5bebcc08a44b'},
    {id: 14, title:'Desert', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1043/1043597.png?w=1060&t=st=1668438644~exp=1668439244~hmac=f434f55f9c63723c635e0ba13a11d2dda0783e13fa6e03228bf2f52f046e5f0f'},
    {id: 13, title:'Boats', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1227/1227691.png?w=1060&t=st=1668438562~exp=1668439162~hmac=0800f081a98e1c97502c508fdc4ef00c48a5a5be548657bffb302613d3c92ce5'},
    {id: 15, title:'Arctic', imgSrc: 'https://cdn-icons-png.flaticon.com/512/721/721173.png?w=1060&t=st=1668438617~exp=1668439217~hmac=72b0fddc580d946257e6a1adba279ec208dbbd4d4e7799636be4fd7d76ed3792'},
    {id: 16, title: 'Castles', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1238/1238985.png?w=1060&t=st=1668438597~exp=1668439197~hmac=88ba4408fab478f933b1bc20102d84cf49a5b9d46575796844623f177ca80742'},
    {id: 17, title: 'Beaches', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1238/1238964.png?w=1060&t=st=1668438669~exp=1668439269~hmac=fd0ebdea0213ee07affc5047751ecf12ab7f4a9e0224c245a75a5bebcc08a44b'},
    {id: 18, title: 'Desert', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1043/1043597.png?w=1060&t=st=1668438644~exp=1668439244~hmac=f434f55f9c63723c635e0ba13a11d2dda0783e13fa6e03228bf2f52f046e5f0f'},
    {id: 19, title:'Arctic', imgSrc: 'https://cdn-icons-png.flaticon.com/512/721/721173.png?w=1060&t=st=1668438617~exp=1668439217~hmac=72b0fddc580d946257e6a1adba279ec208dbbd4d4e7799636be4fd7d76ed3792'},
    {id: 10, title: 'Castles', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1238/1238985.png?w=1060&t=st=1668438597~exp=1668439197~hmac=88ba4408fab478f933b1bc20102d84cf49a5b9d46575796844623f177ca80742'},
    {id: 11, title: 'Beaches', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1238/1238964.png?w=1060&t=st=1668438669~exp=1668439269~hmac=fd0ebdea0213ee07affc5047751ecf12ab7f4a9e0224c245a75a5bebcc08a44b'},
    {id: 12, title: 'Boats', imgSrc: 'https://cdn-icons-png.flaticon.com/512/1227/1227691.png?w=1060&t=st=1668438562~exp=1668439162~hmac=0800f081a98e1c97502c508fdc4ef00c48a5a5be548657bffb302613d3c92ce5'}
];

export const Header = ({renderItemData}:{renderItemData: ListRenderItem<DataFilterType>}) => {

    const [value, setValue] = useState('');


    return (
        <View style={styles.header}>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.search}
                    onChangeText={setValue}
                    value={value}
                    clearButtonMode="always"
                    inlineImageLeft='search_icon'
                    onSubmitEditing={() =>  Alert.alert('You found' + " " + value)}
                />
            </View>
                <FlatList
                    horizontal
                    data={dataFilter}
                    renderItem={renderItemData}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        zIndex: 3,
    },
    search: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gray',
        width: (WIDTH - 2 * PADDING),
        paddingVertical: 15,
    },
    filterBar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    searchBar:{
        display:'flex',
        justifyContent:'space-between'
    },
});
