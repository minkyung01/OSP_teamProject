import React, { useState, useContext } from 'react';
import {SafeAreaView, Text, StyleSheet, Image, View, ScrollView} from 'react-native';
import { basicColor, themeColor } from './colors';
import { iconImages } from './images';
import InfoContext from './components/InfoContext'
import IconButton from './components/IconButton';
import Title from './components/Title';
import Category from "./components/Category";
import List from "./components/List";
import NavBar from "./components/NavBar";
import SelectBtn from "./components/SelectBtn";
import {Picker} from '@react-native-picker/picker';

const AppMain = ({navigation})=> {
    const userContext = useContext(InfoContext);
    const [item,setItem] = useState("Today's Schedule");
    const DATE = new Date().getFullYear().toString()+(new Date().getMonth()+10).toString()+(new Date().getDate()+10).toString(); //오늘 날짜 YYYYMMDD
    return (
    <SafeAreaView style={styles.basic}>
        <Title />
        <View>
        <View style={[{flexDirection: 'row',alignItems:'center',justifyContent:'space-between',marginBottom:10}]}>
        <SafeAreaView style={[styles.button,{backgroundColor:userContext.SkinColor.light}]}>
            <Picker
                style={{width:160}}
                selectedValue={item}
                onValueChange={(val,idx)=> {
                setItem(val);}
             }>
             <Picker.Item style={styles.buttonText} label="All" value={"All Schedule"} />
             <Picker.Item style={styles.buttonText} label="Today" value={"Today's Schedule"} />
             <Picker.Item style={styles.buttonText} label="Assignment" value={"Today's Assignment"} />
             <Picker.Item style={styles.buttonText} label="Lecture" value={"Today's Lecture"} />
             <Picker.Item style={styles.buttonText} label="Hobby" value={"Today's Hobby"} />
             <Picker.Item style={styles.buttonText} label="etc." value={"Today's etc."} />
             <Picker.Item style={styles.buttonText} label="Completed" value={"Completed"} />
             <Picker.Item style={styles.buttonText} label="Uncompleted" value={"Uncompleted"} />
           </Picker>
        </SafeAreaView>

            <View style={styles.edit}>
                <SelectBtn/>
                <IconButton type={iconImages.edit} page={"EditList"} onPressOut={()=> navigation.navigate('Del_Add_List')}/>
            </View>
        </View>
        <Category title={item}/>

        <ScrollView style={{height:'52.5%'}}>
                {(item==="All Schedule")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==="Today's Schedule")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>parseInt(LIST.deadline) >= DATE).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==="Today's Assignment")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>(LIST.category==='assignment')&&(parseInt(LIST.deadline) >= DATE)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==="Today's Hobby")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>(LIST.category==='hobby')&&(parseInt(LIST.deadline) >= DATE)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==="Today's Lecture")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>(LIST.category==='lecture')&&(parseInt(LIST.deadline) >= DATE)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==="Today's etc.")&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>(LIST.category==='etc.')&&(parseInt(LIST.deadline) >= DATE)).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==='Completed')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>LIST.completed===true).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
                {(item==='Uncompleted')&&(
                Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1))).filter(LIST=>LIST.completed===false).map(listItem => (
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"showList"} navigation={navigation}/>
                ))}
        </ScrollView>
        </View>
        <NavBar navigation={navigation}/>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    basic: {
        backgroundColor: basicColor.background,
        paddingTop:'10%',
        height:"100%"
    },
    container: {
        paddingTop:20,
        marginTop: 20,
        marginBottom: 20,
    },
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

export default AppMain;