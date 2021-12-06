import React,{useState, useContext} from 'react';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import {basicColor, themeColor} from '../colors';

const CategoryBtn = ({category}) =>{
    return(
        <SafeAreaView style={styles.button}>
        <Pressable
            onPress={()=>{
                alert("category!!");
            }}
        >
            <Text style={styles.buttonText}>{category}</Text>
        </Pressable>
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    button: {
        width: 80,
        height: 40,
        backgroundColor: themeColor.Orange.dark,
        borderRadius: 10,
        marginLeft: 40,
        paddingBottom: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 15,
        fontWeight: '700',
        color: basicColor.background,
    },
});

export default CategoryBtn;