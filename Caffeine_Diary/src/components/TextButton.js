import React,{useState, useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Text, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {basicColor} from '../colors';

const TextButton = ({text, navigation, id}) =>{
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
                text=="delete all"&& userContext._setLists(''); //delete all button
                text=="Log Out"&& navigation.push('Login');
                text=="more"&& id=="a"&& navigation.navigate('LevelInfo');
                text=="more"&& id=="s"&& navigation.navigate('Sticker_and_Skin');
                text=="go to Main"&& navigation.push('Main');
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