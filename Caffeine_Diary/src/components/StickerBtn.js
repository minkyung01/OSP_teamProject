import React from 'react';
import {Pressable, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {iconImages} from '../images';

const StickerBtn = ({type}) =>{
    return(
        <Pressable><Image style={styles.sticker} source={type} /></Pressable>
    );
};

StickerBtn.propTypes={
    color: PropTypes.oneOf(Object.values(iconImages.stickerImages)).isRequired, /*Explanation of the method*/
};
const styles = StyleSheet.create({
    sticker: {
        width: 50,
        height: 50,
        margin: 10,
    },
})

export default StickerBtn;