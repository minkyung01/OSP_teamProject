import React,{useContext} from 'react';
import InfoContext from './InfoContext';
import {Pressable, SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';
import {themeColor} from '../colors';

const ColorBtn = ({color}) => {
    const userContext = useContext(InfoContext);
    return(
        <Pressable onPress={()=>{
            userContext.setSkinColor(color);
        }}>
            <SafeAreaView style={{
                backgroundColor:color.dark,
                width: (userContext.SkinColor==color?120:100),
                height: (userContext.SkinColor==color?120:100),
                margin: 15}}></SafeAreaView>
        </Pressable>
    );
};
ColorBtn.propTypes={
    color: PropTypes.oneOf(Object.values(themeColor)).isRequired, /*Explanation of the method*/
};

export default ColorBtn;