import React,{useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {iconImages} from '../images';

const StickerBtn = ({type, num}) =>{
    const userContext = useContext(InfoContext);
    return(
        <Pressable onPress={()=>{
            userContext.setSticker(num);
            }}>
        <Image style={{
            width: (userContext.CheckSticker==num?75:50),
            height: (userContext.CheckSticker==num?75:50),
            margin: 10,
        }} source={type} /></Pressable>
    );
};

StickerBtn.propTypes={
    type: PropTypes.oneOf(Object.values(iconImages.stickerImages)).isRequired, /*Explanation of the method*/
};
const styles = StyleSheet.create({
    sticker: {
        width: 50,
        height: 50,
        margin: 10,
    },
})

export default StickerBtn;