import React, {useState} from "react";
import {StatusBar, SafeAreaView, Pressable, Text, View, StyleSheet, Image, TextInput, Dimensions} from 'react-native';
import {basicColor} from './colors';
import { viewStyles, textStyles } from './styles';
import Input from './Input';

const AddList = () => {
    const width = Dimensions.get('window').width;
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" style={textStyles.statusbar}/>
                <SafeAreaView style={{flexDirection:'column'}}>
                    <SafeAreaView style={{marginTop: 40}}>
                        <Text style={styles.title}>Add new schedule to</Text>
                    </SafeAreaView>
                    <SafeAreaView style={{marginBottom: 25}}>
                        <Text style={styles.title}>          TO-Do-LIST</Text>
                    </SafeAreaView>
                </SafeAreaView>
            
                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Title</Text>
                    <TextInput style={styles.input}>Creating a prototype</TextInput>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row',backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Deadline</Text>
                    <TextInput style={styles.input}>November 19th, 11:00PM</TextInput>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Category</Text>
                    <TextInput style={styles.input}>Assignment</TextInput>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row', backgroundColor: basicColor.itemBackground}}>
                    <Text style={styles.greyBox}>Comment</Text>
                    <SafeAreaView style={styles.comment}>
                        <TextInput style={{backgroundColor: '#FFFFFF', width: '90%',  fontSize:23, fontWeight:'400', marginTop: 30, padding: 5}}>
                        I can do it!
                        </TextInput>
                    </SafeAreaView>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable style={{ flex: 1, backgroundColor: basicColor.itemBackground, paddingLeft: 40}}>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 30,paddingLeft: 30,}}>  Add</Text>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 0,paddingBottom: 40,paddingLeft: 30,}}>Photo</Text>
                    </Pressable>
                    <Pressable style={{ flex: 1, backgroundColor: basicColor.itemBackground, paddingRight: 60}}>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 30,paddingLeft: 40,}}>    Add</Text>
                        <Text style={{fontSize:23,fontWeight:'700',paddingTop: 0,paddingBottom: 40,paddingLeft: 40,}}>Location</Text>
                    </Pressable>
                </SafeAreaView>

                <SafeAreaView style={{flexDirection:'row'}}>
                    <Pressable>
                        <Text style={{ backgroundColor: basicColor.itemBackground, fontSize:23,fontWeight:'700',paddingTop: 13,paddingBottom: 13, paddingLeft: '40%', paddingRight: '40%', margin: 20, marginTop: 40}}>add</Text>
                    </Pressable>
                </SafeAreaView>

            </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        padding: 20,
    },
    title: {
        alignContent: 'center',
        color: basicColor.text,
        fontSize: 30,
        fontWeight: '700',
    },
    greyBox: {
        flex: 1,
        fontSize:23,
        fontWeight:'700',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 15,
    },
    input: {
        flex: 2,
        fontSize:23,
        fontWeight:'400',
        paddingTop: 30,
        paddingBottom: 30,
    },
    comment: {
        flex: 2,
        fontSize:23,
        fontWeight:'400',
    },
})

export default AddList;