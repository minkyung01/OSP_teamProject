import React from 'react';
import {StatusBar, SafeAreaView,Pressable, View,Text, StyleSheet, Image, TextInput,ScrollView, Dimensions} from 'react-native';
import {basicColor, themeColor} from './colors';
import { iconImages } from './images';
import { textStyles } from './styles';
import Title from './components/Title';

const Search = () => {
    const width = Dimensions.get('window').width;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
            <ScrollView width = {width-20} height = '80%'>
            <Title />

            <SafeAreaView style={{flexDirection: 'row',backgroundColor:themeColor.Orange.dark}}>
            <Pressable>
                <Image style={styles.search} source={require('./../assets/searchIcon.png')} />
            </Pressable>
            <TextInput style={styles.searchBar}
                placeholder="Search a task">
            </TextInput>
            </SafeAreaView>

            <Text style={styles.text}>search result: 1</Text>
            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.result}>Buying milk</Text>
                </SafeAreaView>
            </SafeAreaView>
            </ScrollView>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding: 20,
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
        backgroundColor: '#FF991C',
        color: '#FFFFFF',
        fontSize: 18,
        width:'100%',
        padding: 10,
        fontWeight:'700',
    },
    result: {
        backgroundColor: '#FFE4C3',
        color: '#000000',
        fontSize: 18,
        fontWeight:'700',
    },
})

export default Search;