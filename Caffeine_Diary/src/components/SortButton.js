import React, {useContext, Component} from 'react';
import InfoContext from './InfoContext';
import {Pressable, StyleSheet, View, Image, Text} from 'react-native';
import {basicColor} from '../colors';
import PropTypes from 'prop-types';
import {iconImages} from '../images';

/* button to select the sort method*/
const SortButton = ({text, method})=>{
    const userContext = useContext(InfoContext);
    return(
        <Pressable style={iconStyle.container}
            onPress={()=>{
                userContext.setSort(method);
            }}>

            <CheckButton type={(userContext.Sort===method)?iconImages.completed:iconImages.uncompleted}/>
            <Text style={iconStyle.contents}>{text}</Text>
        </Pressable>
    );
};
SortButton.propTypes={
    text: PropTypes.string.isRequired, /*Explanation of the method*/
    method: PropTypes.string.isRequired, /*method type*/
};

const CheckButton = ({type})=>{
    return(
       <Image source={type} style={iconStyle.icon}/>
    );
};
CheckButton.propTypes = {
    type: PropTypes.oneOf(Object.values(iconImages)).isRequired, /*image(checked or unchecked)*/
};
const iconStyle= StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        backgroundColor: basicColor.itemBackground,
        borderRadius: 10,
        padding: 5,
        marginTop: 3,
        marginLeft: 0,
    },
    contents:{
        alignItems: 'flex-start',
        flex: 1,
        fontSize: 20,
        fontWeight: '700',
        color: basicColor.text,
        fontWeight:'400',
    },
    icon: {
        tintColor: basicColor.text,
        width: 30,
        height: 30,
        margin: 10,
    },
});
export default SortButton;


