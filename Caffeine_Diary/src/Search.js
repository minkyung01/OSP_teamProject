import React from 'react';
import {SafeAreaView, View,Text, StyleSheet, Image, TextInput} from 'react-native';
import {basicColor} from './colors'

const Search = () => {
    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={{flexDirection:'row',alignItems:'center',margin:10}}>
                <Image style={styles.coffee} source={require('./../assets/coffee.png')} />
                <Text style={styles.title}>TO-DO-LIST</Text>
            </SafeAreaView>
            <TextInput style={styles.searchBar}
                placeholder="Search a task">
            </TextInput>
            <Text style={styles.text}>search result: 1</Text>
            <SafeAreaView style={{alignItems:'center',flexDirection:'row',backgroundColor:'#FFE4C3',width:'100%',marginTop:10,paddingTop:10,paddingBottom:10}}>
                <SafeAreaView style={styles.content}>
                     <Text style={styles.result}>Buying milk</Text>
                </SafeAreaView>
            </SafeAreaView>

            
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
        alignItems: 'flex-start',
        flex: 1,
    },
    coffee: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 8,
        width: 60,
        height: 90,
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