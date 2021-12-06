import React, {useState, useContext} from "react";
import InfoContext from './InfoContext';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image,Pressable } from "react-native";
import { basicColor, themeColor } from "../colors";
import { iconImages } from '../../src/images';
import IconButton from './IconButton';
import Title from './Title';

import Category from "./Category";
import List from "./List";
import NavBar from "./NavBar";
import SelectBtn from "./SelectBtn";
import {Picker} from '@react-native-picker/picker';

export const Header = () => {
    return (
        <View style={styles.header}>
            <Title />
        </View>
    );
};
export const Contents = () => {
    const userContext = useContext(InfoContext);
    const [item,setItem] = useState('today');
    return (
    <View>
        <View style={[{flexDirection: 'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}]}>
        <SafeAreaView style={[styles.button,{backgroundColor:userContext.SkinColor.light}]}>
            <Picker
                style={{width:160}}
                selectedValue={item}
                onValueChange={(val,idx)=> {
                setItem(val);}
             }>
             <Picker.Item style={styles.buttonText} label="Today" value={"today"} />
             <Picker.Item style={styles.buttonText} label="Assignment" value={"assignment"} />
             <Picker.Item style={styles.buttonText} label="Lecture" value={"lecture"} />
             <Picker.Item style={styles.buttonText} label="Hobby" value={"hobby"} />
             <Picker.Item style={styles.buttonText} label="etc." value={"etc."} />
             <Picker.Item style={styles.buttonText} label="Completed" value={"completed"} />
             <Picker.Item style={styles.buttonText} label="Uncompleted" value={"uncompleted"} />
           </Picker>
        </SafeAreaView>

            <View style={styles.edit}>
                <SelectBtn/>
                <IconButton type={iconImages.edit} page={"EditList"}/>
            </View>
        </View>
        <Category title="Today's Schedule" />
        <ScrollView style={{height:'52.5%'}}>
                {(item==='today')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='assignment')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.category==='assignment').map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='hobby')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.category==='hobby').map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='lecture')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.category==='lecture').map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='etc.')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.category==='etc.').map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='completed')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.completed===true).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
                {(item==='uncompleted')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.date<b.date?1:-1):((a,b)=>a.deadline<b.deadline?1:-1)).filter(LIST=>LIST.completed===false).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext.setLists(currentLists);
                       }} page={"showList"}/>
                )))}
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
        paddingRight:'10%',
        flexDirection:'row',
    },
    button: {
        width: 160,
        height: 40,
        borderRadius: 10,
        marginLeft: 40,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: basicColor.text,
    },
});
