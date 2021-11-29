import React from 'react';
import {SafeAreaView, View,Text, StyleSheet, Image} from 'react-native';

const Search = () => {
    return(
        <SafeAreaView style={styles.container}>
            
            <Image style={styles.coffee} source={require('./../assets/coffee.png')} />

            <Text style={styles.title}>TO-DO-LIST</Text>
            <Text style={styles.searchBar}>
                placeholder="Search a task"
            </Text>

            <Text>search result: 1</Text>
            
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
        padding: 10,
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
        width: '20%',
        height: '60%',
    },
    title: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 40,
        fontWeight: '700',
    },
    searchBar: {
        backgroundColor: '#FF991C',
        color: '#FFFFFF',
        fontSize: 18,
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