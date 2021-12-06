import React from "react";
import {StyleSheet, Dimensions, TextInput} from 'react-native';
import {basicColor} from './colors';

const Input = ({value, onSubmitEditing, onChangeText}) => {
    return (
        <TextInput style={inputStyle.textInput, {flexDirection: "row"}}> Title 
            <TextInput placeholder='+ Add a task'
            placeholderTextColor= {basicColor.text}
            maxLength={20}
            keyboardAppearance="dark"
            value={value} onChangeText={onChangeText}
            onSubmitEditing={onSubmitEditing}>
            </TextInput>
        </TextInput>
    );
};

const inputStyle = StyleSheet.create({
    textInput: {
        fontSize: 25,
        width: Dimensions.get('window').width-20,
        height: 60,
        marginTop: 10,
        marginLeft: 3,
        paddingLeft: 15,
        paddingTop: 2,
        backgroundColor: basicColor.itemBackground,
        color: basicColor.text,
    },
});

export default Input;