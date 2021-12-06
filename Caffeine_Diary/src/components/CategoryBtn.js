import React,{useState, useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Text, SafeAreaView, StyleSheet} from 'react-native';
import {basicColor, themeColor} from '../colors';

const CategoryBtn = ({category}) =>{
    const userContext = useContext(InfoContext);
    return(
        <SafeAreaView style={[styles.button,{backgroundColor:userContext.SkinColor.dark}]}>
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