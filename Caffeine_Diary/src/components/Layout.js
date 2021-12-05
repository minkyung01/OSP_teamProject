import React, {useState, useContext} from "react";
import InfoContext from './InfoContext';
import { StyleSheet, Text, View, ScrollView, Image,Pressable } from "react-native";
import { basicColor, themeColor } from "../colors";
import { iconImages } from '../../src/images';
import IconButton from './IconButton';
import Title from './Title';

import Category from "./Category";
import List from "./List";
import NavBar from "./NavBar";

export const Header = () => {
    return (
        <View style={styles.header}>
            <Title />
        </View>
    );
};
export const SubContents = () => {
    const userContext = useContext(InfoContext);
    return (
        <View style={[styles.subContents, {flexDirection: 'row',alignItems:'center'}]}>
            <Pressable style={[styles.category,{backgroundColor: userContext.SkinColor.dark,}]}><Text style={{color: basicColor.background,fontWeight: '700',fontSize: 15,}}>
            category</Text></Pressable>
            <View style={styles.share}>
                <IconButton type={iconImages.share} />
            </View>
            <Text style={styles.select}>select all</Text>
            <View style={styles.uc_box}>
                <IconButton type={iconImages.uncompleted} />
            </View>
            <View style={styles.edit}>
                <IconButton type={iconImages.edit} page={"EditList"}/>
            </View>
        </View>
    );
};

export const MainContents = () => {
    const userContext = useContext(InfoContext);

    return (
        <View style={styles.mainContents}>
            <Category title="Today's Schedule" />
            <ScrollView>
                {Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.
                            completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                ))}
            </ScrollView>
        </View>
    );
};

export const Footer = () => {
    return (
        <NavBar />
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems:'center',
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
        height:40,
        alignItems:'center',
        justifyContent: 'center',
        marginLeft: '10%',
        padding: 7,
        fontWeight: '700',
        fontSize: 15,
        borderRadius: 5,
    },
    share: {
        marginLeft: 15,
    },
    select: {
        marginLeft: 70,
        fontWeight: '500',
    },
    uc_box: {
        marginLeft: 7,
    },
    selected: {
        color: basicColor.text,
    },
    add: {
        width: 100,
        height: 40,
        backgroundColor: themeColor.Orange.dark,
        color: basicColor.background,
        marginLeft: '39%',
        marginBottom: 20,
        paddingLeft: 15,
        paddingTop: 3,
        fontSize: 25,
        fontWeight: '700',
        borderRadius: 10,
    },
    edit: {
        marginLeft: 10,
    },
});
