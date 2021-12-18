import React,{useContext, useState} from 'react';
import {StatusBar, SafeAreaView,Pressable, View,Text, StyleSheet, Image, TextInput,ScrollView, Dimensions} from 'react-native';
import InfoContext from './components/InfoContext';
import {basicColor, themeColor} from './colors';
import { iconImages } from './images';
import { textStyles } from './styles';
import Title from './components/Title';
import NavBar from './components/NavBar';
import List from './components/List';

const Search = ({navigation}) => {
    const width = Dimensions.get('window').width;
    const userContext = useContext(InfoContext);
    const [text, setText] = useState('');
    const [search, setSearch] = useState('');
    const [count, setCount] = useState(0);
    const [click, setClick] = useState(0);
    return(
    <SafeAreaView style={{height:'100%'}}>
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <ScrollView width = {width-20} height = '80%'>
            <Title />

            <SafeAreaView style={{flexDirection: 'row',backgroundColor:userContext.SkinColor.dark}}>
            <Pressable onPressIn={()=>{
                setSearch(text);
                setClick(click=>click+1);
            }}
            onPressOut={()=>{
                (()=>{
                    if((search !='')&&(click==1)){
                        Object.values(userContext.Lists).map(listItem => (
                        (()=>{
                            if(listItem.todo.includes(search)){
                                setCount(count=>count+1);
                            }
                        })()
                        ))
                    }
                })()

                }}>
                <Image style={styles.search} source={iconImages.search} />
            </Pressable>
            <TextInput style={styles.searchBar}
                placeholder="Search a task"
                onChangeText={text=>{setText(text);setCount(0);setClick(0);}}>
            </TextInput>
            </SafeAreaView>

            <Text style={styles.text}>search result: {count}</Text>

                {(search=='')||(count==0)||
                (Object.values(userContext.Lists).sort((userContext.Sort=='closest')?((a,b)=>a.deadline<b.deadline?-1:1):((a,b)=>a.date<b.date?1:-1)).map(listItem => (
                (listItem.todo.includes(search))&&(
                    <List key={listItem.date}
                          item={listItem}
                          action={(date)=>{
                            listItem.completed = !listItem.completed;
                            const currentLists = Object.assign({}, userContext.Lists);
                            userContext._setLists(currentLists);
                       }} page={"search"} navigation={navigation}/>
                )
                )))}
            </ScrollView>
            </SafeAreaView>
        <NavBar navigation={navigation}/>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding: 20,
        height:'89%',
    },
    content: {
        margin: 10,
        alignItems: 'center',
        flex: 1,
    },
    coffee: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        width: 60,
        height: 90,
    },
    search: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        marginTop: 8,
        width: 40,
        height: 40,
    },
    title: {
        alignItems: 'center',
        color: basicColor.text,
        fontSize: 50,
        fontWeight: '700',
    },
    text: {
        alignItems:'center',
        paddingTop: 50,
        color: basicColor.text,
        fontSize: 20,
        fontWeight: '700',
    },
    searchBar: {
        flex: 1,
        color: basicColor.text,
        fontSize: 18,
        width:'100%',
        padding: 10,
        fontWeight:'700',
    },
    result: {
        color: basicColor.text,
        fontSize: 18,
        fontWeight:'700',
    },
})

export default Search;