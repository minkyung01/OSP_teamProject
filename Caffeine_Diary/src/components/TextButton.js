import React,{useState, useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {basicColor} from '../colors';

const TextButton = ({text}) =>{
    const [isTouch,SetIsTouch] =useState(false);
    const userContext = useContext(InfoContext);
    return(
        <SafeAreaView style={{flexDirection:'row',alignItems: 'center',marginLeft:(text==="Log Out"?'auto':20)}}>
        <Pressable
            onPressIn={()=>{
                SetIsTouch(true);
            }}
            onPressOut={()=>{
                SetIsTouch(false);
                text=="delete all"&& userContext.setLists(''); //delete all button
            }}
        >
            <Text style={{
            fontSize:20,
            fontWeight:'700',
            textDecorationLine: (isTouch?'underline':'none'),/*if touch button, text will be underlined*/
            color:basicColor.pointText,
            }}>{text}</Text>
        </Pressable>
        </SafeAreaView>
    );
};
TextButton.propTypes ={
    text:PropTypes.string.isRequired,
};
export default TextButton;