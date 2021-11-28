import React, {useContext} from 'react';
import {Pressable, StyleSheet, View, Image, Text} from 'react-native';
import {basicColor} from '../colors';
import PropTypes from 'prop-types';
import {images} from '../images';
import {Sort} from '../Info';
/* button to select the sort method*/
const SortButton = ({text, method})=>{
    return(
        <Pressable style={iconStyle.container}>
            <CheckButton type={(Sort===method)?images.completed:images.uncompleted} />
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
        <Pressable>
            <Image source={type} style={iconStyle.icon}/>
        </Pressable>
    );
};
CheckButton.propTypes = {
    type: PropTypes.oneOf(Object.values(images)).isRequired, /*image(checked or unchecked)*/
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


