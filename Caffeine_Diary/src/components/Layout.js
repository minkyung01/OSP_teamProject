import React, {useState} from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { basicColor, themeColor } from "../colors";
import { iconImages } from '../iconImage';
import IconButton from './IconButton';

import Category from "./Category";
import List from "./List";
import NavBar from "./NavBar";

export const Header = () => {
    return (
        <View style={[styles.header, {flexDirection: 'row'}]}>
            <Image style={styles.image} source={require('../../assets/coffee.png')} />
            <Text style={styles.title}>TO-DO-LIST</Text>
        </View>
    );
};
export const SubContents = () => {
    return (
        <View style={[styles.subContents, {flexDirection: 'row'}]}>
            <Text style={styles.category}>category</Text>
            <View style={styles.share}>
                <IconButton type={iconImages.share} />
            </View>
            <Text style={styles.select}>select all</Text>
            <View style={styles.uc_box}>
                <IconButton type={iconImages.uc_box} />
            </View>
        </View>
    );
};

export const MainContents = () => {

    const [newList, setNewList] = useState('');

    const [lists, setLists] = useState({
        '1': {id: '1', item: "test #1", completed: false},
        '2': {id: '2', item: "test #2", completed: true},
    });

    const _addList = () => {
        const ID = Date.now().toString();
        const newListObject = {
            [ID]: {id: ID, item: newList, completed: false},
        };
        setNewList('');
        setLists({...lists, ...newListObject});
    } ;

    const _toggleList = id => {
        const currentLists = Object.assign({}, lists);
        currentLists[id]['completed'] = !currentLists[id]['completed'];
        setLists(currentLists);
    };

    return (
        <View style={styles.mainContents}>
            <Category title="Today's Schedule" />
            <ScrollView>
                {Object.values(lists).reverse().map(item => (
                    <List key={item.id} item={item}
                    toggleList={_toggleList} />
                ))}
            </ScrollView>
            <View>
                <Text style={styles.edit}>edit</Text>
            </View>
        </View>
    );
};

export const Footer = () => {
    return (
        <View style={[styles.footer, {flexDirection: 'row'}]}>
            <NavBar menu={"       View" + "\n" + "TO-DO-LIST"} />
            <NavBar menu="My Page" />
            <NavBar menu=" Search" />
            <NavBar menu={"   View" + "\n" + "Ranking"} />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flex: 4,
        backgroundColor: basicColor.background,
    },
    subContents: {
        flex: 2,
        backgroundColor: basicColor.background,
    },
    mainContents: {
        flex: 18,
        backgroundColor: basicColor.background,
    },
    footer: {
        flex: 3,
        backgroundColor: themeColor.Orange.dark,
    },
    title: {
        color: basicColor.text,
        alignSelf: 'center',
        fontSize: 50,
        fontWeight: '700',
        marginLeft: 10,
        marginTop: 5,
    },
    image: {
        alignSelf: 'center',
        width: 60,
        height: 90,
        marginLeft: 28,
    },
    category: {
        width: '20%',
        backgroundColor: themeColor.Orange.dark,
        color: basicColor.background,
        alignContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: '10%',
        paddingLeft: 11,
        paddingTop: 7,
        fontWeight: '700',
        fontSize: 15,
        borderRadius: 5,
    },
    share: {
        marginLeft: 15,
        marginTop: 13,
    },
    select: {
        marginTop: 17,
        marginLeft: 113,
        fontWeight: '500',
    },
    uc_box: {
        marginTop: 12,
        marginLeft: 7,
    },
    selected: {
        color: basicColor.text,
    },
    edit: {
        width: 100,
        height: 40,
        backgroundColor: themeColor.Orange.dark,
        color: basicColor.background,
        marginLeft: '39%',
        marginBottom: 20,
        paddingLeft: 27,
        paddingTop: 3,
        fontSize: 25,
        fontWeight: '700',
        borderRadius: 10,
    }
});
